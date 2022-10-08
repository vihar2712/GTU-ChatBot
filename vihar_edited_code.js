const { Client, LocalAuth } = require("whatsapp-web.js");
const { MessageMedia } = require("whatsapp-web.js");
let flag = false;
const fs = require("fs");
const finalName = require("./new");
let ca1 = (ca2 = ca4 = false);
function cases(c1, c2, c3) {
  c1 = true;
  c2 = false;
  c3 = false;
  arr = [c1, c2, c3];
  return arr;
}
// const fs = require("fs");
// const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: false },
});

client.initialize();

client.on("loading_screen", (percent, message) => {
  console.log("LOADING SCREEN", percent, message);
});

client.on("qr", (qr) => {
  // NOTE: This event will not be fired if a session is specified.
  console.log("QR RECEIVED", qr);
});

client.on("authenticated", () => {
  console.log("AUTHENTICATED");
  //   console.log(finalName);
});

client.on("auth_failure", (message) => {
  // Fired if session restore was unsuccessful
  console.error("AUTHENTICATION FAILURE", message);
});

client.on("ready", () => {
  console.log("READY and WORKING!");
});

const initial_message = finalName.initial_msg;

client.on("message", async (message) => {
  // console.log('MESSAGE RECEIVED', message);
//   const fs = require("fs");
  let courseData = {};
  let studentsData = {};

  // READING COURSE-BRANCH JSON FILE
  const jsonStringCourse = fs.readFileSync(
    "./course_branch.json",
    "utf-8",
    (err) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }
    }
  );
  courseData = JSON.parse(jsonStringCourse);

  // READING STUDENTS JSON FILE
  const jsonStringStudent = fs.readFileSync(
    "./students.json",
    "utf-8",
    (err) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }
    }
  );
  studentsData = JSON.parse(jsonStringStudent);

  // console.log(typeof(message.body)){
  let case1 = false;
  let case2 = false;
  let case4 = false;
  let u = /^\d{12}$/;
  var user_inp = message.body.toUpperCase();

  if (user_inp.match(u)) {
    console.log("inside pattern test");
    // flag = true;
    const replyData = studentsData[user_inp];
    // console.log(replyData);

    if (replyData) {
      message
        .reply(
          `Your current semester is ${replyData.sem}  
                \nHere is a link to your result... ${replyData.result} 
                \nYour branch is ${replyData.branch}`
        )
        .toString();

      if (replyData.exmfee) {
        message.reply(
          "Fee Status : You have paid the fees." + "\n\nPress # to go back!👈"
        );
      } else {
        message.reply("Fee Status : You have not paid the fees.") +
          "\n\nPress # to go back!👈";
      }
    } else {
      message.reply(
        "Enrollment Number not found.\n\nPlease enter a valid enrollment number."
      );
    }
    return;
  } else {
    var user_inp = message.body.toUpperCase();
  }

  if (user_inp.startsWith("HI") || user_inp.startsWith("HE")) {
    const initial_media = await MessageMedia.fromFilePath("gtu.jpg");
    await client.sendMessage(message.from, initial_media, {
      caption: initial_message,
    });
    flag = true;
  } else if (flag) {
    const media = await MessageMedia.fromFilePath("./circular.pdf");
    const bonafide = MessageMedia.fromFilePath("./bonafide.pdf");

    //IN THIS WE NEED TO MENTION ALL THE COMMANDS : ( ALL MUST BE UNIQUE )
    // I PREFER WRITING TEXT INSTEAD OF WRITING NUMBERS
    switch (user_inp) {
      case "1":
        message.reply(finalName.course_details).toString();
        message.reply(
          "Please reply with 2 character course code\nFor ex: *CE*" +
            "\nPress # to go back!👈"
        );
        [ca1, ca2, ca4] = cases(case1, case2, case4);
        break;
      case "2":
        message.reply("Enter your Enrollment number");
        [ca2, ca1, ca4] = cases(case2, case1, case4);
        break;
      case "3":
        await message.reply(media)
        message.reply ("Press # to return to the main menu.");
        break;

      case "4":
        message.reply("Select your branch\n" + finalName.paper_details) +
          "\nPress # to go back!👈";
        [ca4, ca1, ca2] = cases(case4, case2, case1);
        break;
      case "5":
        message.reply(
          bonafide + finalName.bonafidemsg + "\nPress # to go back!👈"
        );
        break;

      case "6":
        message.reply(
          "Click on below link and fill the details\n\n" +
            "https://yourownresume.netlify.app/" +
            "\nPress # to go back!👈"
        );
        break;

      case "7":
        message.reply(
          "For comprehensive understanding https://www.de.gtu.ac.in/StudyMaterial_Presentation\n\n" +
            finalName.egd_material +
            "\nPress # to go back!👈"
        );
        break;
      case "8":
        message.reply(finalName.query + "\nPress # to go back!👈");
        break;

      case "9":
        message.reply(
          "Thank you for using GTU bot, looking forward to see you again"
        );
        flag = false;
        break;
      case "CE":
        message
          .reply(finalName.ce_description + "\nPress # to go back!👈")
          .toString();
        break;

      case "IT":
        message
          .reply(finalName.it_description + "\nPress # to go back!👈")
          .toString();
        break;

      case "ICT":
        message
          .reply(finalName.ict_description + "\nPress # to go back!👈")
          .toString();
        break;

      case "ME":
        message
          .reply(finalName.me_description + "\nPress # to go back!👈")
          .toString();
        break;

      case "CL":
        message
          .reply(finalName.cl_description + "\nPress # to go back!👈")
          .toString();
        break;

      case "#":
        message.reply(finalName.informative_section);
        ca1 = ca2 = ca4 = false;
        break;

      case "hi" || "HI" || "HII" || "hii" || "Hello":
        break;

      case "CE-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(finalName.ce_papers + "\nPress # to go back!👈");
        }, 3000);
        break;

      case "ME-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(finalName.ce_papers + "\nPress # to go back!👈");
        }, 3000);
        break;

      case "CL-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(finalName.ce_papers + "\nPress # to go back!👈");
        }, 3000);
        break;

      case "CEM-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(finalName.ce_papers + "\nPress # to go back!👈");
        }, 3000);
        break;

      case "IT-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(finalName.ce_papers);
          message.reply("Press # to go back!👈");
        }, 3000);
        break;

      case "ICT-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(finalName.ce_papers + "\nPress # to go back!👈");
        }, 3000);
        break;

      default:
        // console.log(ca1, ca2, ca4);
        if (ca1) {
          message.reply(
            "*Invalid input*" +
              "\n\nPlease reply with 2 character course code\nFor ex: *CE* " +
              "\n\nPress # to go back!👈"
          );
        } else if (ca2) {
          message.reply(
            "*Invalid input!!*\n\nPlease enter your enrollment number again." +
              "\n\nPress # to go back!👈"
          );
        } else if (ca4) {
          message.reply(
            "*Invalid input!!* " +
              "\n\nSelect your branch\n\n" +
              finalName.paper_details +
              "\nPress # to go back!👈"
          );
        } else {
          message.reply(`*Uh oh! Invalid input*\n\n` + finalName.initial_msg);
        }
    }
  } else {
    message.reply(`Uh oh! Invalid input\n\nPlease enter Hi/Hello to begin!`);
  }
});

client.on("disconnected", (reason) => {
  console.log("Client was logged out", reason);
});
