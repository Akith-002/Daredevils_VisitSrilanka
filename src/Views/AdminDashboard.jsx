import React, { useState } from "react";
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

const TABLE_ROWS = [
  {

    img: "https://randomuser.me/api/portraits/men/1.jpg",
    passportNumber: "M1234567",
    name: "John Doe",
    country: "United States",
    visaType: "Tourist",
    visaStatus: "Approved",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    passportNumber: "A9876543",
    name: "Jane Smith",
    country: "Canada",
    visaType: "Work",
    visaStatus: "Pending",
    interpolClearance: "Under Review",
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    passportNumber: "K3344556",
    name: "David Brown",
    country: "United Kingdom",
    visaType: "Student",
    visaStatus: "Denied",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    passportNumber: "S1122334",
    name: "Emily Johnson",
    country: "Australia",
    visaType: "Business",
    visaStatus: "Approved",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    passportNumber: "Z5566778",
    name: "Chris Evans",
    country: "New Zealand",
    visaType: "Tourist",
    visaStatus: "Pending",
    interpolClearance: "Denied",
  },
  {
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    passportNumber: "C1234567",
    name: "Anna Lee",
    country: "Germany",
    visaType: "Student",
    visaStatus: "Approved",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    passportNumber: "B7654321",
    name: "Michael Green",
    country: "France",
    visaType: "Work",
    visaStatus: "Denied",
    interpolClearance: "Under Review",
  },
  {
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    passportNumber: "D2345678",
    name: "Sophia Wilson",
    country: "Italy",
    visaType: "Business",
    visaStatus: "Pending",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    passportNumber: "E3456789",
    name: "James Anderson",
    country: "Japan",
    visaType: "Tourist",
    visaStatus: "Approved",
    interpolClearance: "Denied",
  },
  {
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    passportNumber: "F4567890",
    name: "Olivia Taylor",
    country: "South Korea",
    visaType: "Student",
    visaStatus: "Pending",
    interpolClearance: "Under Review",
  },
  {
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    passportNumber: "G5678901",
    name: "Liam Harris",
    country: "Brazil",
    visaType: "Work",
    visaStatus: "Approved",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    passportNumber: "H6789012",
    name: "Emma Davis",
    country: "Argentina",
    visaType: "Business",
    visaStatus: "Denied",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/men/13.jpg",
    passportNumber: "I7890123",
    name: "Oliver Martinez",
    country: "Mexico",
    visaType: "Tourist",
    visaStatus: "Pending",
    interpolClearance: "Denied",
  },
  {
    img: "https://randomuser.me/api/portraits/women/14.jpg",
    passportNumber: "J8901234",
    name: "Ava Robinson",
    country: "Chile",
    visaType: "Student",
    visaStatus: "Approved",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/men/15.jpg",
    passportNumber: "K9012345",
    name: "Ethan Clark",
    country: "Colombia",
    visaType: "Work",
    visaStatus: "Under Review",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/women/16.jpg",
    passportNumber: "L0123456",
    name: "Mia Lewis",
    country: "Peru",
    visaType: "Business",
    visaStatus: "Denied",
    interpolClearance: "Under Review",
  },
  {
    img: "https://randomuser.me/api/portraits/men/17.jpg",
    passportNumber: "M1234568",
    name: "Alexander Young",
    country: "South Africa",
    visaType: "Tourist",
    visaStatus: "Approved",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/women/18.jpg",
    passportNumber: "N2345679",
    name: "Isabella Walker",
    country: "Nigeria",
    visaType: "Student",
    visaStatus: "Pending",
    interpolClearance: "Denied",
  },
  {
    img: "https://randomuser.me/api/portraits/men/19.jpg",
    passportNumber: "O3456780",
    name: "Daniel King",
    country: "India",
    visaType: "Work",
    visaStatus: "Approved",
    interpolClearance: "Cleared",
  },
  {
    img: "https://randomuser.me/api/portraits/women/20.jpg",
    passportNumber: "P4567891",
    name: "Charlotte Scott",
    country: "Pakistan",
    visaType: "Business",
    visaStatus: "Denied",
    interpolClearance: "Cleared",
=======
    applicantId: 4,
    honorifics: "Mr.",
    name: "Baragama Arachchige Akith Chandinu",
    address: "155/7, Gramasanwardana Road, Molligoda, Wadduwa",
    dateOfBirth: "2002-03-01T00:00:00.000Z",
    phoneNo: 767221011,
    email: "akith.chandinu@gmail.com",
    passNo: "N11399729",
    passCountry: "Sri Lanka",
    dateOfExpiry: "2034-05-27T00:00:00.000Z",
    dateOfIssue: "2024-05-27T00:00:00.000Z",
    passImage:
      "https://zenko.syd1.digitaloceanspaces.com/applicants/Baragama%20Arachchige%20Akith%20Chandinu_1725640355050/image1.png",
    visaType: "Tourist",
    duration: "30 days",
    visaPeriod: "30 days",
    entryType: "Single Entry",
    previouslyVisited: "No",
    extendAssistance: "No",
    docReady: "Yes",
    TandCAgree: "Yes",
    passBio:
      "https://zenko.syd1.digitaloceanspaces.com/applicants/Baragama%20Arachchige%20Akith%20Chandinu_1725640355050/image2.png",
    interPolCheck: "under review",
    adminApproveStatus: "Approved",
    submitEmailSentStatus: null,
    approveEmailSentStatus: null,
    createdAt: "2024-09-06T16:32:36.000Z",
    updatedAt: "2024-09-06T16:32:36.000Z",
  },
  {
    applicantId: 5,
    honorifics: "Mr.",
    name: "Akith",
    address: "155/7 , colombo",
    dateOfBirth: "2005-01-01T00:00:00.000Z",
    phoneNo: 767221011,
    email: "akith.chandinu@gmail.com",
    passNo: "n1232431",
    
    
    
    passCountry: "Sri Lanka",
    dateOfExpiry: "2025-01-06T00:00:00.000Z",
    dateOfIssue: "2024-01-01T00:00:00.000Z",
    passImage:
      "https://zenko.syd1.digitaloceanspaces.com/applicants/Akith_1725642036535/a18a35b0c1b26b46f5fc0d4bd6970227.jpg",
    visaType: "Tourist",
    duration: "30 days",
    visaPeriod: "30 days",
    entryType: "Single Entry",
    previouslyVisited: "Yes",
    extendAssistance: "No",
    docReady: "Yes",
    TandCAgree: "Yes",
    passBio:
      "https://zenko.syd1.digitaloceanspaces.com/applicants/Akith_1725642036535/passport-1.jpeg",
    interPolCheck: null,
    adminApproveStatus: "Approved",
    submitEmailSentStatus: null,
    approveEmailSentStatus: null,
    createdAt: "2024-09-06T17:00:37.000Z",
    updatedAt: "2024-09-06T17:00:37.000Z",

  },
];

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const AdminDashboard = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleOpenDialog = (user) => {
    setSelectedUser(user); // Set the selected user data
    setOpenDialog(!openDialog); // Toggle dialog visibility
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(TABLE_ROWS.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const currentRows = TABLE_ROWS.slice(startIndex, endIndex);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">

          <div className="mb-4 flex flex-col justify-center items-center gap-8 md:flex-row md:items-center">
            <span className="font-bold">Admin panel</span>

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
                                : interPolCheck
                                 === "Under Review"
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

                              img,
                              passportNumber,
                              name,
                              country,
                              visaType,
                              visaStatus,
                              interpolClearance,

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

        <div>
          <Typography variant="h6">Email:</Typography>
          <Typography>{selectedUser.email}</Typography>
        </div>

        <div>
          <Typography variant="h6">Phone Number:</Typography>
          <Typography>{selectedUser.phoneNo}</Typography>
        </div>

        <div>
          <Typography variant="h6">Date of Birth:</Typography>
          <Typography>{new Date(selectedUser.dateOfBirth).toLocaleDateString()}</Typography>
        </div>

        <div>
          <Typography variant="h6">Address:</Typography>
          <Typography>{selectedUser.address}</Typography>
        </div>

        <div>
          <Typography variant="h6">Previously Visited:</Typography>
          <Typography>{selectedUser.previouslyVisited}</Typography>
        </div>

        <div>
          <Typography variant="h6">Extend Assistance:</Typography>
          <Typography>{selectedUser.extendAssistance}</Typography>
        </div>

        <div>
          <Typography variant="h6">Document Ready:</Typography>
          <Typography>{selectedUser.docReady}</Typography>
        </div>

        <div>
          <Typography variant="h6">Terms Agreed:</Typography>
          <Typography>{selectedUser.TandCAgree}</Typography>
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


              <img
                src={selectedUser.img}
                alt={selectedUser.name}
                className="w-32 h-32 rounded-full mt-4"
              />
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpenDialog(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </Dialog>

    </>
  );
};

export default AdminDashboard;
