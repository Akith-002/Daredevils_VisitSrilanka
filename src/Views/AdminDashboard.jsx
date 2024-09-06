import React, { useState, useEffect } from "react";
import { getApplicantDetails } from "../Request/Admin.js"; // Import the API request function
// import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "Image",
  "Passport number",
  "Name",
  "passCountry",
  "Visa Type",
  "Visa Status",
  "Interpol Clearance",
  "",
];

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const AdminDashboard = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [applicants, setApplicants] = useState([]); // State to hold fetched data
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // To show a loading state

  // Fetch the applicant details when the component mounts
  useEffect(() => {
    const fetchApplicantData = async () => {
      try {
        const data = await getApplicantDetails(); // Fetch data from API
        setApplicants(data); // Update state with fetched data
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching applicants:", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchApplicantData();
  }, []);

  const handleOpenDialog = (user) => {
    setSelectedUser(user); // Set the selected user data
    setOpenDialog(!openDialog); // Toggle dialog visibility
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(applicants.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const currentRows = applicants.slice(startIndex, endIndex);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            Admin panel
          </div>
        </CardHeader>

        {/* table */}
        <CardBody className="overflow-scroll px-10">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map(
                (
                  {
                    passImage,
                    passNo,
                    name,
                    passCountry,
                    visaType,
                    adminApproveStatus,
                    interPolCheck,
                  },
                  index
                ) => {
                  const isLast = index === currentRows.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={passImage}
                            alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {passNo}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {passCountry}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {visaType}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={adminApproveStatus}
                            color={
                              adminApproveStatus === "Approved"
                                ? "green"
                                : adminApproveStatus === "Pending"
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={interPolCheck}
                            color={
                              interPolCheck === "Cleared"
                                ? "green"
                                : interPolCheck === "Under Review"
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Button
                          size="sm"
                          variant="text"
                          className="text-blue-500"
                          onClick={() =>
                            handleOpenDialog({
                              passImage,
                              passNo,
                              name,
                              passCountry,
                              visaType,
                              adminApproveStatus,
                              interPolCheck,
                            })
                          }
                        >
                          View More
                        </Button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <IconButton
                key={index + 1}
                variant={currentPage === index + 1 ? "filled" : "text"}
                size="sm"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </IconButton>
            ))}
          </div>
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </CardFooter>
      </Card>

      {/* Dialog for displaying user details */}
      <Dialog open={openDialog} handler={() => setOpenDialog(!openDialog)}>
        <DialogHeader>Details for {selectedUser?.name}</DialogHeader>
        <DialogBody className="overflow-scroll">
          {selectedUser && (
            <div className="grid grid-cols-2 gap-4">
              {/* Displaying Passport Image */}
              <div className="col-span-2 flex justify-center">
                <img
                  src={selectedUser.passImage}
                  alt={selectedUser.name}
                  className="w-32 h-32 rounded-full mt-4"
                />
              </div>

              {/* Displaying each value in a neat grid */}
              <div>
                <Typography variant="h6">Passport Number:</Typography>
                <Typography>{selectedUser.passNo}</Typography>
              </div>

              <div>
                <Typography variant="h6">Country of Passport:</Typography>
                <Typography>{selectedUser.passCountry}</Typography>
              </div>

              <div>
                <Typography variant="h6">Visa Type:</Typography>
                <Typography>{selectedUser.visaType}</Typography>
              </div>

              <div>
                <Typography variant="h6">Visa Status:</Typography>
                <Typography>{selectedUser.adminApproveStatus}</Typography>
              </div>

              <div>
                <Typography variant="h6">Interpol Clearance:</Typography>
                <Typography>{selectedUser.interPolCheck}</Typography>
              </div>

              {/* Add more fields as required */}
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={() => setOpenDialog(false)}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AdminDashboard;
