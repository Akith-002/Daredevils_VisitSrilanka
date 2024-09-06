import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarType2 from "../Components/NavbarType2";
import FooterType2 from "../Components/FooterType2";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Input, Button, Dialog } from "@material-tailwind/react";
import { getApplicantDetails } from "../Request/Admin";





const EnterPassport = () => {
  const [passport, setPassport] = useState("");
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const navigate = useNavigate();

  const onChange = ({ target }) => setPassport(target.value);

  const handleSaveStatus = async () => {
    if (selectedUser) {
      try {
        // Call the API to update the status
        await updateAdminStatus(selectedUser.passNo, selectedStatus);
        // Optionally, you can update the applicant state or refetch the data here
        setOpenDialog(false); // Close the dialog after saving
      } catch (error) {
        console.error("Error saving status:", error);
        // Handle the error here
      }
    }
  };

  const handleSubmit = async () => {
    if (passport.trim()) {
      const applicant = applicants.find((app) => app.passNo === passport.trim());
      if (applicant) {
        const { adminApproveStatus, submitEmailSentStatus, approveEmailSentStatus } = applicant;
        navigate("/visastatus", {
          state: {
            adminApproveStatus,
            submitEmailSentStatus,
            approveEmailSentStatus
          }
        });
      } else {
        setDialogMessage("Passport number doesn't exist in the database.");
        setShowDialog(true);
      }
    }
  };

  const updateAdminStatus = async (applicantId, newStatus) => {
    try {
      const reqBody = {
        applicantId: applicantId,
        adminApproveStatus: newStatus,
      };
      const response = await axios.put('https://a818-112-134-213-205.ngrok-free.app/applicant', reqBody);
      return response.data; // Handle the response as needed
    } catch (error) {
      console.error("Error updating status:", error);
      // Handle the error here
    }
  };

  useEffect(() => {
    const fetchApplicantData = async () => {
      try {
        const data = await getApplicantDetails();
        setApplicants(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching applicants:", error);
        setLoading(false);
      }
    };

    fetchApplicantData();
  }, []);

  return (
    <>
      <NavbarType2 />
      <div className="min-h-screen bg-custom-radial text-white flex flex-col">
        {/* Main Content */}
        <div className="flex items-center flex-grow gap-40">
          {/* Left Timeline */}
          <div className="p-6">
            <a href="/visaapproval">
              {" "}
              <ArrowCircleLeft size={64} color="black" />
            </a>
          </div>
          <div className="mr-8">
            <div className="w-[30rem]">
              <p className="text-black text-[40px] font-extrabold font-inconsolata mb-16">
                Check the status of your visa application
              </p>
              <p className="text-black text-[20px] font-bold mb-5 ml-10 font-inconsolata">
                Enter your Passport number
              </p>
              <div className="flex w-full max-w-[24rem] ml-10 space-x-4">
                <Input
                  type="text"
                  label="Passport number"
                  value={passport}
                  onChange={onChange}
                  className="bg-white"
                  containerProps={{
                    className: "min-w-0 flex-grow",
                  }}
                  color="blue"
                />
                <Button
                  size="sm"
                  className="rounded px-7 bg-blue-1"
                  onClick={handleSubmit}
                  disabled={!passport.trim()}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex-shrink-0">
            <div className="rounded-lg overflow-hidden">
              <img
                src="../../src/assets/images/airport.png"
                alt="Traveler"
                className="w-[500px] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
        {/* Dialog */}
        <Dialog
          open={showDialog}
          onClose={() => setShowDialog(false)}
          size="sm"
        >
          <div className="text-center">
            <p className="text-black">{dialogMessage}</p>
            <Button
              size="sm"
              color="blue"
              onClick={() => setShowDialog(false)}
              className="mt-4"
            >
              OK
            </Button>
          </div>
        </Dialog>
      </div>
      <FooterType2 />
    </>
  );
};

export default EnterPassport;
