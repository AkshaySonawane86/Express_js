const fs = require("fs");
const pdf = require("pdf-parse");

let dataBuffer = fs.readFileSync("input.pdf");

pdf(dataBuffer).then(function (data) {
    const text = data.text;

    // Example: convert lines to objects (customize as needed)
    const lines = text.split("\n").filter(x => x.trim() !== "");
    const json = lines.map((line, index) => ({
        id: index + 1,
        value: line.trim()
    }));

    fs.writeFileSync("output.json", JSON.stringify(json, null, 2));
    console.log("JSON created.");
});
