import React, { useState, useEffect } from "react";
import { getApplicantDetails } from "../Request/Admin.js"; // Import the API request function
import axios from "axios"; // Ensure axios is imported

import { PencilIcon } from "@heroicons/react/24/solid";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [applicants, setApplicants] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // To show a loading state
  const [selectedStatus, setSelectedStatus] = useState("Under Review"); // Default status

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

  const updateAdminStatus = async (applicantId, newStatus) => {
    try {
      const reqBody = {
        applicantId: applicantId,
        adminApproveStatus: newStatus,
      };
      const response = await axios.put('https://your-api-endpoint', reqBody); // Update with your API endpoint
      return response.data; // Handle the response as needed
    } catch (error) {
      console.error("Error updating status:", error);
      // Handle the error here
    }
  };

  const handleOpenDialog = (user) => {
    setSelectedUser(user); // Set the selected user data
    setSelectedStatus(user.adminApproveStatus); // Set the status for the selected user
    setOpenDialog(true); // Open dialog
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSaveStatus = async () => {
    if (selectedUser) {
      try {
        await updateAdminStatus(selectedUser.passNo, selectedStatus); // Update the status
        // Update the local state to reflect changes
        setApplicants(prevApplicants =>
          prevApplicants.map(applicant =>
            applicant.passNo === selectedUser.passNo
              ? { ...applicant, adminApproveStatus: selectedStatus }
              : applicant
          )
        );
        setOpenDialog(false); // Close the dialog after saving
      } catch (error) {
        console.error("Error saving status:", error);
        // Handle any error here
      }
    }
  };

  const totalPages = Math.ceil(applicants.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const currentRows = applicants.slice(startIndex, endIndex);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-center items-center gap-8 md:flex-row md:items-center">
            <span className="font-bold text-[30px]">Admin panel</span>
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
      <Dialog open={openDialog} handler={() => setOpenDialog(false)}>
        <DialogHeader>Details for {selectedUser?.name}</DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col gap-4">
            <div>
              <Typography variant="small" color="blue-gray" className="font-normal">
                Passport Number: {selectedUser?.passNo}
              </Typography>
              <Typography variant="small" color="blue-gray" className="font-normal">
                Name: {selectedUser?.name}
              </Typography>
              <Typography variant="small" color="blue-gray" className="font-normal">
                Country: {selectedUser?.passCountry}
              </Typography>
              <Typography variant="small" color="blue-gray" className="font-normal">
                Visa Type: {selectedUser?.visaType}
              </Typography>
              <Typography variant="small" color="blue-gray" className="font-normal">
                Interpol Clearance: {selectedUser?.interPolCheck}
              </Typography>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Update Status
              </label>
              <select
                id="status"
                name="status"
                value={selectedStatus}
                onChange={handleStatusChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="Under Review">Under Review</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="blue-gray"
            onClick={() => setOpenDialog(false)}
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleSaveStatus}
          >
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AdminDashboard;
