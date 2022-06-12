const tutorials = [
    "what Does The This Keyword Mean?",
    "what Is The Constructor OO Pattern?",
    "implementing Blockchain Web API",
    "the Test Driven Development Workflow",
    "what Is NaN And How Can We Check For It",
    "what Is The Difference Between StopPropagation And PreventDefault?",
    "immutable State And Pure Functions",
    "what Is The Difference Between == And ===?",
    "what Is The Difference Between Event Capturing And Bubbling?",
    "what Is JSONP?"
]
const titleCased = () => {
    return tutorials.map((title) => {
        const tutorial = title.split(" ");
        const newTitleCased = tutorial.map((tutor) => tutor.charAt(0).toUpperCase() + tutor.slice(1));
        const response = newTitleCased.join(" ");
        return response;


    });
};