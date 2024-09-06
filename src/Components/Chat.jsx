import React from "react";
import { Chatbot, createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "../App.css"; // Ensure Tailwind is correctly imported
import "./Chat.css"


const userResponses = {};

// ActionProvider class
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greetUser = (name) => {
    const message = this.createChatBotMessage(
      `Hi ${name}, What type of experiences are you most interested in during your visit to Sri Lanka?`,
      { widget: "experienceOptions" }
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], name }));
       userResponses.name = name;

  };

  handleExperienceSelection = (experience) => {
    const message = this.createChatBotMessage(
      "How long do you plan to stay in Sri Lanka?",
      { widget: "durationOptions" }
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], experience }));
    userResponses.experience = experience;

  };

  handleDurationSelection = (duration) => {
    const message = this.createChatBotMessage(
      "Which regions or cities of Sri Lanka are you most interested in visiting?",
      { widget: "regionOptions" }
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], duration }));
    userResponses.duration = duration;

  };

  handleRegionsSelection = (region) => {
    const message = this.createChatBotMessage(
      "How many places do you plan to visit?",
      { widget: "placeOptions" }
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], region }));
    userResponses.region = region;

  };

  handleEnd = (places) => {
    const message = this.createChatBotMessage(
      "Thank you for your responses! We will tailor a perfect trip plan for you based on your preferences."
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message], places }));
      userResponses.places = places;
    console.log("Final user responses: ", userResponses);
    const prompt =` I am a foreign tourist planning to visit sri lanka. I plan to do ${userResponses.experience} activities. I plan to stay around ${userResponses.duration}. I plan on visiting  ${userResponses.region} type ares but open to any similar suggestions. I want to visit ${userResponses.places}.Help me plan my trip. give me the coordinates of every location in a object with keys lat,lon,location`;

  };
}

// MessageParser class
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (!this.state.name) {
      this.actionProvider.greetUser(message);
    } else if (lowerCaseMessage.includes("cultural") || lowerCaseMessage.includes("wildlife") || lowerCaseMessage.includes("beach")) {
      this.actionProvider.handleExperienceSelection(lowerCaseMessage);
    } else if (lowerCaseMessage.includes("days") || lowerCaseMessage.includes("weeks")) {
      this.actionProvider.handleDurationSelection(lowerCaseMessage);
    } else if (lowerCaseMessage.includes("colombo") || lowerCaseMessage.includes("kandy")) {
      this.actionProvider.handleRegionsSelection(lowerCaseMessage);
    } else if (lowerCaseMessage.includes("places")) {
      this.actionProvider.handleEnd(lowerCaseMessage);
    }
  }
}

// ExperienceOptions widget component
const ExperienceOptions = (props) => {
  const options = [
    { text: "Cultural", handler: () => props.actionProvider.handleExperienceSelection("Cultural"), id: 1 },
    { text: "Wildlife", handler: () => props.actionProvider.handleExperienceSelection("Wildlife"), id: 2 },
    { text: "Beach", handler: () => props.actionProvider.handleExperienceSelection("Beach"), id: 3 },
    { text: "Adventure", handler: () => props.actionProvider.handleExperienceSelection("Adventure"), id: 4 },
    { text: "Wellness", handler: () => props.actionProvider.handleExperienceSelection("Wellness"), id: 5 },
    { text: "Clubbing", handler: () => props.actionProvider.handleExperienceSelection("Clubbing"), id: 6 },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className=" bg-light-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

// DurationOptions widget component
const DurationOptions = (props) => {
  const options = [
    { text: "1-3 days", handler: () => props.actionProvider.handleDurationSelection("1-3 days"), id: 1 },
    { text: "4-7 days", handler: () => props.actionProvider.handleDurationSelection("4-7 days"), id: 2 },
    { text: "1-2 weeks", handler: () => props.actionProvider.handleDurationSelection("1-2 weeks"), id: 3 },
    { text: "More than 2 weeks", handler: () => props.actionProvider.handleDurationSelection("More than 2 weeks"), id: 4 },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="bg-light-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

// RegionOptions widget component
const RegionOptions = (props) => {
  const options = [
    { text: "Colombo", handler: () => props.actionProvider.handleRegionsSelection("Colombo"), id: 1 },
    { text: "Kandy", handler: () => props.actionProvider.handleRegionsSelection("Kandy"), id: 2 },
    { text: "Ella", handler: () => props.actionProvider.handleRegionsSelection("Ella"), id: 3 },
    { text: "Galle", handler: () => props.actionProvider.handleRegionsSelection("Galle"), id: 4 },
    { text: "Yala or Wilpattu", handler: () => props.actionProvider.handleRegionsSelection("Yala or Wilpattu"), id: 5 },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="bg-light-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

// PlaceOptions widget component
const PlaceOptions = (props) => {
  const options = [
    { text: "1-3 places", handler: () => props.actionProvider.handleEnd("1-3 places"), id: 1 },
    { text: "4-6 places", handler: () => props.actionProvider.handleEnd("4-6 places"), id: 2 },
    { text: "6+ places", handler: () => props.actionProvider.handleEnd("6+ places"), id: 3 },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="bg-light-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

// Configuration for the chatbot
const config = {
  botName: "TripPlannerBot",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to our trip planner!`),
    createChatBotMessage("Please enter your name:"),
  ],
  widgets: [
    {
      widgetName: "experienceOptions",
      widgetFunc: (props) => <ExperienceOptions {...props} />,
    },
    {
      widgetName: "durationOptions",
      widgetFunc: (props) => <DurationOptions {...props} />,
    },
    {
      widgetName: "regionOptions",
      widgetFunc: (props) => <RegionOptions {...props} />,
    },
    {
      widgetName: "placeOptions",
      widgetFunc: (props) => <PlaceOptions {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#263E7D",
    },
    chatButton: {
      backgroundColor: "#3BC2FF",
    },
  },
};

// Main Chat component
function Chat() {
  return (
    <div className="flex flex-col w-full h-[90vh]  mx-auto bg-white rounded-xl shadow-lg">
      <div className="flex-grow ">
        <Chatbot
          headerText='TripPlannerBot'
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          // disableScrollToBottom

        />
      </div>
    </div>
  );
}

export default Chat;


