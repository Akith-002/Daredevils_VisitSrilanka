
import React from "react";
// import Navbar from "@/components/Navbar";
import"../../../globals.css";

const SignINPage = () => {
  return (
    <>
      <Navbar />
      <main
        className="flex h-screen w-full items-center justify-center"
        style={{ backgroundColor: "#9496D9" }}
      >
        <SignIn
          appearance={{
         
              variables: {
                colorBackground: "white",
                colorText: 'black',
              },
            elements: {
              card: "bg-white",
              headerTitle: "text-black",
              formFieldInput: "bg-field-1 bg-opacity-30",
              formFieldLabel: "text-black",
              dividerText: "text-black",
              headerSubtitle: "text-black",
              footerAction: "bg-white",
              internal:"bg-white",
             // Apply the custom CSS class to the footer
              footerActionText: "text-black",
            },
          }}
        />
      </main>
    </>
  );
};

export default SignINPage;
