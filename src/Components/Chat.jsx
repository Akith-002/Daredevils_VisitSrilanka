import React from "react";
import { Chatbot, createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind is correctly imported

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
  };

  handleExperienceSelection = () => {
    const message = this.createChatBotMessage(
      "How long do you plan to stay in Sri Lanka?",
      { widget: "durationOptions" }
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  handleDurationSelection = () => {
    const message = this.createChatBotMessage(
      "Which regions or cities of Sri Lanka are you most interested in visiting?",
      { widget: "regionOptions" }
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  handleRegionsSelection = () => {
    const message = this.createChatBotMessage(
      "How many places do you plan to visit?",
      { widget: "placeOptions" }
    );
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  handleEnd = () => {
    const message = this.createChatBotMessage("Thank you for your responses! We will tailor a perfect trip plan for you based on your preferences.");
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
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
      this.actionProvider.handleExperienceSelection();
    } else if (lowerCaseMessage.includes("days") || lowerCaseMessage.includes("weeks")) {
      this.actionProvider.handleDurationSelection();
    } else if (lowerCaseMessage.includes("colombo") || lowerCaseMessage.includes("kandy")) {
      this.actionProvider.handleRegionsSelection();
    } else if (lowerCaseMessage.includes("places")) {
      this.actionProvider.handleEnd();
    }
  }
}

// ExperienceOptions widget component
const ExperienceOptions = (props) => {
  const options = [
    { text: "Cultural", handler: props.actionProvider.handleExperienceSelection, id: 1 },
    { text: "Wildlife", handler: props.actionProvider.handleExperienceSelection, id: 2 },
    { text: "Beach", handler: props.actionProvider.handleExperienceSelection, id: 3 },
    { text: "Adventure", handler: props.actionProvider.handleExperienceSelection, id: 4 },
    { text: "Wellness", handler: props.actionProvider.handleExperienceSelection, id: 5 },
    { text: "Clubbing", handler: props.actionProvider.handleExperienceSelection, id: 6 },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
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
    { text: "1-3 days", handler: props.actionProvider.handleDurationSelection, id: 1 },
    { text: "4-7 days", handler: props.actionProvider.handleDurationSelection, id: 2 },
    { text: "1-2 weeks", handler: props.actionProvider.handleDurationSelection, id: 3 },
    { text: "More than 2 weeks", handler: props.actionProvider.handleDurationSelection, id: 4 },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
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
    { text: "Colombo", handler: props.actionProvider.handleRegionsSelection, id: 1 },
    { text: "Kandy", handler: props.actionProvider.handleRegionsSelection, id: 2 },
    { text: "Ella", handler: props.actionProvider.handleRegionsSelection, id: 3 },
    { text: "Galle", handler: props.actionProvider.handleRegionsSelection, id: 4 },
    { text: "Yala or Wilpattu", handler: props.actionProvider.handleRegionsSelection, id: 5 },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700"
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
    { text: "1-3 places", handler: props.actionProvider.handleEnd, id: 1 },
    { text: "4-6 places", handler: props.actionProvider.handleEnd, id: 2 },
    { text: "6+ places", handler: props.actionProvider.handleEnd, id: 3 },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
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
      backgroundColor: "#BEE6F2",
    },
    chatButton: {
      backgroundColor: "#3BC2FF",
    },
  },
};

// Main Chat component
function Chat() {
  return (
    <div className="p-6 w-auto mx-auto bg-white rounded-xl shadow-md space-y-4">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default Chat;
