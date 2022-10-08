const { Client, LocalAuth } = require("whatsapp-web.js");
const { MessageMedia } = require("whatsapp-web.js");
let flag = false;
const fs = require("fs");
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
});

client.on("auth_failure", (message) => {
  // Fired if session restore was unsuccessful
  console.error("AUTHENTICATION FAILURE", message);
});

client.on("ready", () => {
  console.log("READY and WORKING!");
});



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


const initial_message = `Hello 👋\nReply with an appropriate option.\n\n 🔍 *Informative Section*: you will find all the *useful stuff* here. \n\n1️⃣ *Course* details.\n2️⃣ *Personal* details.\n3️⃣ *Get the latest circular* details.\n\n\n📚 *Academics Section*: Information related to academics.\n\n4️⃣Previous year *question papers* of gtu.\n5️⃣ Get *Bonafide Certificate*.\n6️⃣  Want to *build resume*?.\n7️⃣ Get *Design Engineering* material\n8️⃣ Raise a *Query*\n9️⃣ *Quit*`;

client.on("message", async (message) => {
  // console.log('MESSAGE RECEIVED', message);

  // console.log(typeof(message.body))
  let u = /\d[12]/;
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
        message.reply("Fee Status : You have paid the fees.");
      } else {
        message.reply("Fee Status : You have not paid the fees.");
      }
    } 
    else {
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
    const media = await MessageMedia.fromFilePath("./bonafide.pdf");
    const bonafide = MessageMedia.fromFilePath("./bonafide.pdf");

    //IN THIS WE NEED TO MENTION ALL THE COMMANDS : ( ALL MUST BE UNIQUE )
    // I PREFER WRITING TEXT INSTEAD OF WRITING NUMBERS
    switch (user_inp) {
      case "1":
        message.reply(
          "Which course you want to know about ?\n\n◾ CE(Computer Engineering)\n◾ IT(Information Technology)\n◾ ICT(Information and Communication Technology)\n◾ ME(Mechanical Engineering)\n◾ CL(Civil Engineering)"
        );
        message.reply(
          "Please reply with 2 character course code\nFor ex: *CE* "
        );
        break;
      case "2":
        message.reply("Enter your Enrollment number");
        break;
      case "3":
        await message.reply(media);
        await message.reply("Press # to go back!👈");
        break;

      case "4":
        message.reply("Select your branch");
        message.reply(
          `➡️ CE-P(computer Engineering Papers)\n➡️ ME-P(Mechanical Engineering Papers)\n➡️ CL-P(Civil Engineering Papers)\n➡️ CEM-P(Chemical Engineering Papers)\n➡️ IT-P(Information Technology Papers)\n➡️ ICT-P(Information and communication Technology Papers)\n`
        );
        message.reply("Press # to go back!👈");
        break;
        
      case "5":
        message.reply(bonafide);
        message.reply(
          "◾ A photocopy of the College ID card thus attached with the Application form.\n◾ A copy of the latest fee receipt is thus to be attached with the above form. To make sure that the child is still a student of the college."
        );
        message.reply("Press # to go back!👈");
        break;

      case "6":
        message.reply("Click on below link and fill the details");
        message.reply("https://yourownresume.netlify.app/");
        message.reply("Press # to go back!👈");
        break;

      case "7":
        message.reply(
          "For comprehensive understanding https://www.de.gtu.ac.in/StudyMaterial_Presentation"
        );
        message.reply(
          `Canvases \n*AEIOU canvas* \nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/AEIOU%20Summary%20Canvas%20-%20A1%20size.jpg \n\n*Empathy Mapping canvas* \nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/Empathy%20Mapping%20canvas%20-%20A1%20size.png \n\n*Ideation canvas* \nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/Ideation%20Canvas_A1%20size.jpg \n\n*Product Development canvas* \nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/Product%20Development%20Canvas_A1%20size.pdf \n\n*Business Model canvas* \nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/Product%20Development%20Canvas_A1%20size.pdf \n\n*LNM matrix canvas*\nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/LNM_A2%20size.png`
        );
        message.reply("Press # to go back!👈");
        break;
      case "8":
        message.reply(
          "You can contact us on\n📞 079-23267521 / 079-23267570 \n📧 info@gtu.ac.in / registrar@gtu.ac.in\n📝 https://forms.gle/vfmQaWPWvwsFQcCb6"
        );
        message.reply("Press # to go back!👈");
        break;

      case "9":
        message.reply(
          "Thank you for using GTU bot, looking forward to see you again"
        );
        flag = false;
        break;
      case "CE":
        message
          .reply(
            `Description of computer engineering course: ${courseData["CE"].desc}\n📝 Top Companies hiring computer engineers 📝\n1: ${courseData["CE"].companies[0].name}\n👉Company Size: ${courseData["CE"].companies[0].size}\n👉More Info: ${courseData["CE"].companies[0].link}\n---------------------------------------------------------------------\n2: ${courseData["CE"].companies[1].name}\n👉Company Size: ${courseData["CE"].companies[1].size}\n👉More Info: ${courseData["CE"].companies[1].link}\n-------------------------\n3: ${courseData["CE"].companies[2].name}\n👉Company Size: ${courseData["CE"].companies[2].size}\n👉More Info: ${courseData["CE"].companies[2].link}\n-------------------------\n4: ${courseData["CE"].companies[3].name}\n👉Company Size: ${courseData["CE"].companies[3].size}\n👉More Info: ${courseData["CE"].companies[3].link}\n-------------------------\n5: ${courseData["CE"].companies[4].name}\n👉Company Size: ${courseData["CE"].companies[4].size}
\n👉More Info: ${courseData["CE"].companies[4].link}\n\n🎓Top Colleges\n1: ${courseData["CE"].colleges[0].name}\nOwnership 💼: ${courseData["CE"].colleges[0].ownership}\n🗓️ ${courseData["CE"].colleges[0].established}\n💰 fees:${courseData["CE"].colleges[0].fees}\n👆 More Information: ${courseData["CE"].colleges[0].link}\n\n--------------------------\n\n2: ${courseData["CE"].colleges[1].name}\nOwnership 💼: ${courseData["CE"].colleges[1].ownership}\n🗓️ ${courseData["CE"].colleges[1].established}\n💰 fees:${courseData["CE"].colleges[1].fees}\n👆 More Information: ${courseData["CE"].colleges[1].link}\n\n----------------------------\n\n3: ${courseData["CE"].colleges[2].name}\nOwnership 💼: ${courseData["CE"].colleges[2].ownership}\n🗓️ ${courseData["CE"].colleges[2].established}\n💰 fees:${courseData["CE"].colleges[2].fees}\n👆 More Information: ${courseData["CE"].colleges[2].link}\n\n-----------------------------\n\n4: ${courseData["CE"].colleges[3].name}\nOwnership 💼: ${courseData["CE"].colleges[3].ownership}\n🗓️ ${courseData["CE"].colleges[3].established}\n💰 fees:${courseData["CE"].colleges[3].fees}\n👆 More Information: ${courseData["CE"].colleges[3].link}\n\n------------------------------\n\n5: ${courseData["CE"].colleges[4].name}\nOwnership 💼: ${courseData["CE"].colleges[4].ownership}\n🗓️ ${courseData["CE"].colleges[4].established}\n💰 fees:${courseData["CE"].colleges[4].fees}\n👆 More Information: ${courseData["CE"].colleges[4].link}\n\n-------------------------------\n\n6:  ${courseData["CE"].colleges[5].name}\nOwnership 💼: ${courseData["CE"].colleges[5].ownership}\n🗓️ ${courseData["CE"].colleges[5].established}\n💰 fees:${courseData["CE"].colleges[5].fees}\n👆 More Information: ${courseData["CE"].colleges[5].link}\n` +
              "\n============================\nPress # to return to the main menu 👈"
          )
          .toString();
        break;

      case "IT":
        message
          .reply(
            `Description of IT engineering course: ${courseData["IT"].desc}\n===========================\nTop Companies hiring computer engineers\n-----------------------\nCompany Name: ${courseData["IT"].companies[0].name}\nCompany Size: ${courseData["IT"].companies[0].size}\nMore Info: ${courseData["IT"].companies[0].link}\n-------------------------\nCompany Name: ${courseData["IT"].companies[1].name}\nCompany Size: ${courseData["IT"].companies[1].size}\nMore Info: ${courseData["IT"].companies[1].link}\n-------------------------\nCompany Name: ${courseData["IT"].companies[2].name}\nCompany Size: ${courseData["IT"].companies[2].size}\nMore Info: ${courseData["IT"].companies[2].link}\n-------------------------\nCompany Name: ${courseData["IT"].companies[3].name}\nCompany Size: ${courseData["IT"].companies[3].size}\nMore Info: ${courseData["IT"].companies[3].link}\n-------------------------
\nCompany Name: ${courseData["IT"].companies[4].name}\nCompany Size: ${courseData["IT"].companies[4].size}
\nMore Info: ${courseData["IT"].companies[4].link}

                \n===========================\n-------Top Colleges-------\n------------------------------\n\nName: ${courseData["IT"].colleges[0].name}
                \nOwnership: ${courseData["IT"].colleges[0].ownership}\n${courseData["IT"].colleges[0].established}\nfees:${courseData["IT"].colleges[0].fees} \nMore Information: ${courseData["IT"].colleges[0].link}\n\n--------------------------\n\nName: ${courseData["IT"].colleges[1].name}\nOwnership: ${courseData["IT"].colleges[1].ownership}\n${courseData["IT"].colleges[1].established}\nfees:${courseData["IT"].colleges[1].fees}\nMore Information: ${courseData["IT"].colleges[1].link}\n\n----------------------------\n\nName: ${courseData["IT"].colleges[2].name}\nOwnership: ${courseData["IT"].colleges[2].ownership}\n${courseData["IT"].colleges[2].established}\nfees:${courseData["IT"].colleges[2].fees}\nMore Information: ${courseData["IT"].colleges[2].link}\n\n-----------------------------\n\nName: ${courseData["IT"].colleges[3].name}\nOwnership: ${courseData["IT"].colleges[3].ownership}\n${courseData["IT"].colleges[3].established}\nfees:${courseData["IT"].colleges[3].fees}\nMore Information: ${courseData["IT"].colleges[3].link}\n\n------------------------------\n\nName: ${courseData["IT"].colleges[4].name}\nOwnership: ${courseData["IT"].colleges[4].ownership}\n${courseData["IT"].colleges[4].established}\nfees:${courseData["IT"].colleges[4].fees}\nMore Information: ${courseData["IT"].colleges[4].link}\n\n-------------------------------\n\nName: ${courseData["IT"].colleges[5].name}\nOwnership: ${courseData["IT"].colleges[5].ownership}\n${courseData["IT"].colleges[5].established}\nfees:${courseData["IT"].colleges[5].fees}\nMore Information: ${courseData["IT"].colleges[5].link}\n` +
              "\n============================\nPress # to return to the main menu"
          )
          .toString();
        break;

      case "ICT":
        message
          .reply(
            `Description of ICT engineering course: ${courseData["ICT"].desc}
                \n===========================\nTop Companies hiring computer engineers\n-------------------------\nCompany Name: ${courseData["ICT"].companies[0].name}\nCompany Size: ${courseData["ICT"].companies[0].size}
                \nMore Info: ${courseData["ICT"].companies[0].link}\n-------------------------
                \nCompany Name: ${courseData["ICT"].companies[1].name}\nCompany Size: ${courseData["ICT"].companies[1].size}\nMore Info: ${courseData["ICT"].companies[1].link}\n-------------------------\nCompany Name: ${courseData["ICT"].companies[2].name}\nCompany Size: ${courseData["ICT"].companies[2].size}\nMore Info: ${courseData["ICT"].companies[2].link}\n-------------------------\nCompany Name: ${courseData["ICT"].companies[3].name}\nCompany Size: ${courseData["ICT"].companies[3].size}
                \nMore Info: ${courseData["ICT"].companies[3].link}\n-------------------------\nCompany Name: ${courseData["ICT"].companies[4].name}\nCompany Size: ${courseData["ICT"].companies[4].size}\nMore Info: ${courseData["ICT"].companies[4].link}

                \n===========================\n-------Top Colleges-------\n------------------------------\n\nName: ${courseData["ICT"].colleges[0].name}
                \nOwnership: ${courseData["ICT"].colleges[0].ownership}\n${courseData["ICT"].colleges[0].established}\nfees:${courseData["ICT"].colleges[0].fees} \nMore Information: ${courseData["ICT"].colleges[0].link}\n\n--------------------------\n\nName: ${courseData["ICT"].colleges[1].name}\nOwnership: ${courseData["ICT"].colleges[1].ownership}\n${courseData["ICT"].colleges[1].established}\nfees:${courseData["ICT"].colleges[1].fees}\nMore Information: ${courseData["ICT"].colleges[1].link}\n\n----------------------------\n\nName: ${courseData["ICT"].colleges[2].name}\nOwnership: ${courseData["ICT"].colleges[2].ownership}\n${courseData["ICT"].colleges[2].established}\nfees:${courseData["ICT"].colleges[2].fees}\nMore Information: ${courseData["ICT"].colleges[2].link}\n\n-----------------------------\n\nName: ${courseData["ICT"].colleges[3].name}\nOwnership: ${courseData["ICT"].colleges[3].ownership}\n${courseData["ICT"].colleges[3].established}\nfees:${courseData["ICT"].colleges[3].fees}\nMore Information: ${courseData["ICT"].colleges[3].link}\n\n------------------------------\n\nName: ${courseData["ICT"].colleges[4].name}\nOwnership: ${courseData["ICT"].colleges[4].ownership}\n${courseData["ICT"].colleges[4].established}\nfees:${courseData["ICT"].colleges[4].fees}\nMore Information: ${courseData["ICT"].colleges[4].link}\n\n-------------------------------\n\nName: ${courseData["ICT"].colleges[5].name}
                \nOwnership: ${courseData["ICT"].colleges[5].ownership}\n${courseData["ICT"].colleges[5].established}\nfees:${courseData["ICT"].colleges[5].fees}\nMore Information: ${courseData["ICT"].colleges[5].link}\n` +
              "\n============================\nPress # to return to the main menu"
          )
          .toString();
        break;

      case "ME":
        message
          .reply(
            `Description of MECHANICAL engineering course: ${courseData["ME"].desc}
                \n===========================\nTop Companies hiring computer engineers\n-------------------------\nCompany Name: ${courseData["ME"].companies[0].name}\nCompany Size: ${courseData["ME"].companies[0].size}
                \nMore Info: ${courseData["ME"].companies[0].link}\n-------------------------
                \nCompany Name: ${courseData["ME"].companies[1].name}\nCompany Size: ${courseData["ME"].companies[1].size}\nMore Info: ${courseData["ME"].companies[1].link} \n-------------------------\nCompany Name: ${courseData["ME"].companies[2].name}\nCompany Size: ${courseData["ME"].companies[2].size}\nMore Info: ${courseData["ME"].companies[2].link}\n-------------------------\nCompany Name: ${courseData["ME"].companies[3].name}\nCompany Size: ${courseData["ME"].companies[3].size}\nMore Info: ${courseData["ME"].companies[3].link}\n-------------------------\nCompany Name: ${courseData["ME"].companies[4].name}\nCompany Size: ${courseData["ME"].companies[4].size}\nMore Info: ${courseData["ME"].companies[4].link}

                \n===========================\n-------Top Colleges-------\n------------------------------\n\nName: ${courseData["ME"].colleges[0].name}
                \nOwnership: ${courseData["ME"].colleges[0].ownership}\n${courseData["ME"].colleges[0].established}\nfees:${courseData["ME"].colleges[0].fees} \nMore Information: ${courseData["ME"].colleges[0].link}\n\n--------------------------\n\nName: ${courseData["ME"].colleges[1].name}\nOwnership: ${courseData["ME"].colleges[1].ownership}\n${courseData["ME"].colleges[1].established}\nfees:${courseData["ME"].colleges[1].fees}\nMore Information: ${courseData["ME"].colleges[1].link}\n\n----------------------------\n\nName: ${courseData["ME"].colleges[2].name}\nOwnership: ${courseData["ME"].colleges[2].ownership}\n${courseData["ME"].colleges[2].established}\nfees:${courseData["ME"].colleges[2].fees}\nMore Information: ${courseData["ME"].colleges[2].link}\n\n-----------------------------\n\nName: ${courseData["ME"].colleges[3].name}\nOwnership: ${courseData["ME"].colleges[3].ownership}\n${courseData["ME"].colleges[3].established}\nfees:${courseData["ME"].colleges[3].fees}\nMore Information: ${courseData["ME"].colleges[3].link}\n\n------------------------------\n\nName: ${courseData["ME"].colleges[4].name}\nOwnership: ${courseData["ME"].colleges[4].ownership}\n${courseData["ME"].colleges[4].established}\nfees:${courseData["ME"].colleges[4].fees}\nMore Information: ${courseData["ME"].colleges[4].link}\n\n-------------------------------\n\nName: ${courseData["ME"].colleges[5].name}\nOwnership: ${courseData["ME"].colleges[5].ownership}\n${courseData["ME"].colleges[5].established}\nfees:${courseData["ME"].colleges[5].fees}\nMore Information: ${courseData["ME"].colleges[5].link}\n` +
              "\n============================\nPress # to return to the main menu"
          )
          .toString();
        break;

      case "CL":
        message
          .reply(
            `Description of CIVIL engineering course: ${courseData["CL"].desc}
                \n===========================\nTop Companies hiring computer engineers\n-------------------------\nCompany Name: ${courseData["CL"].companies[0].name}\nCompany Size: ${courseData["CL"].companies[0].size}
                \nMore Info: ${courseData["CL"].companies[0].link}
                \n-------------------------\nCompany Name: ${courseData["CL"].companies[1].name}\nCompany Size: ${courseData["CL"].companies[1].size}
                \nMore Info: ${courseData["CL"].companies[1].link}
                \n-------------------------\nCompany Name: ${courseData["CL"].companies[2].name}\nCompany Size: ${courseData["CL"].companies[2].size}
                \nMore Info: ${courseData["CL"].companies[2].link}
                \n-------------------------\nCompany Name: ${courseData["CL"].companies[3].name}\nCompany Size: ${courseData["CL"].companies[3].size}
                \nMore Info: ${courseData["CL"].companies[3].link}
                \n-------------------------
                \nCompany Name: ${courseData["CL"].companies[4].name}\nCompany Size: ${courseData["CL"].companies[4].size}
                \nMore Info: ${courseData["CL"].companies[4].link}

                \n===========================\n-------Top Colleges-------\n------------------------------\n\nName: ${courseData["CL"].colleges[0].name}
                \nOwnership: ${courseData["CL"].colleges[0].ownership}\n${courseData["CL"].colleges[0].established}\nfees:${courseData["CL"].colleges[0].fees} \nMore Information: ${courseData["CL"].colleges[0].link}\n\n--------------------------\n\nName: ${courseData["CL"].colleges[1].name}
                \nOwnership: ${courseData["CL"].colleges[1].ownership}\n${courseData["CL"].colleges[1].established}\nfees:${courseData["CL"].colleges[1].fees}\nMore Information: ${courseData["CL"].colleges[1].link}\n\n----------------------------\n\nName: ${courseData["CL"].colleges[2].name}
                \nOwnership: ${courseData["CL"].colleges[2].ownership}\n${courseData["CL"].colleges[2].established}\nfees:${courseData["CL"].colleges[2].fees}\nMore Information: ${courseData["CL"].colleges[2].link}\n\n-----------------------------\n\nName: ${courseData["CL"].colleges[3].name}
                \nOwnership: ${courseData["CL"].colleges[3].ownership}\n${courseData["CL"].colleges[3].established}\nfees:${courseData["CL"].colleges[3].fees}\nMore Information: ${courseData["CL"].colleges[3].link}\n\n------------------------------\n\nName: ${courseData["CL"].colleges[4].name}
                \nOwnership: ${courseData["CL"].colleges[4].ownership}\n${courseData["CL"].colleges[4].established}\nfees:${courseData["CL"].colleges[4].fees}\nMore Information: ${courseData["CL"].colleges[4].link}\n\n-------------------------------\n\nName: ${courseData["CL"].colleges[5].name}
                \nOwnership: ${courseData["CL"].colleges[5].ownership}\n${courseData["CL"].colleges[5].established}\nfees:${courseData["CL"].colleges[5].fees}\nMore Information: ${courseData["CL"].colleges[5].link}\n` +
              "\n============================\nPress # to return to the main menu"
          )
          .toString();
        break;

      case "#":
        message.reply(
          `Hello 👋\nReply with an appropriate option.\n\n 🔍 *Informative Section*: you will find all the useful stuff which will be useful to you.\n\n1️⃣ *Course* details.\n2️⃣ *Personal* details.\n3️⃣ *Get the latest circular* details.\n\n\n📚 *Academics Section*: Information related to academics.\n\n4️⃣Previous year *question papers* of gtu.\n5️⃣ Get *Bonafide Certificate*.\n6️⃣  Want to *build resume*?.\n7️⃣ Get *Design Engineering* material\n8️⃣ Raise a *Query*\n9️⃣ *Quit*`
        );
        break;

      case "hi" || "HI" || "HII" || "hii" || "Hello":
        break;

      case "CE-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(
            `📅: ${courseData["CE"].papers[0].year}\n1️⃣: ${courseData["CE"].papers[0].link}\n📅: ${courseData["CE"].papers[1].year}\n2️⃣: ${courseData["CE"].papers[1].link}\n📅: ${courseData["CE"].papers[2].year}\n3️⃣: ${courseData["CE"].papers[2].link}\n`
          );
          message.reply("Press # to go back!👈");
        }, 3000);
        break;

      case "ME-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(media);
          message.reply(media);
          message.reply(media);
          message.reply("Press # to go back!👈");
        }, 3000);
        break;

      case "CL-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(media);
          message.reply(media);
          message.reply(media);
          message.reply("Press # to go back!👈");
        }, 3000);
        break;

      case "CEM-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(media);
          message.reply(media);
          message.reply(media);
          message.reply("Press # to go back!👈");
        }, 3000);
        break;

      case "IT-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(media);
          message.reply(media);
          message.reply(media);
          message.reply("Press # to go back!👈");
        }, 3000);
        break;

      case "ICT-P":
        message.reply("Please wait we are fetching the information...");
        setTimeout(() => {
          message.reply("Fetching done");
          message.reply(media);
          message.reply(media);
          message.reply(media);
          message.reply("Press # to go back!👈");
        }, 3000);
        break;

        default:
          message.reply(`Please *enter the valid input!* \n ${initial_message}`);
          break;
    }
  } else {
    message.reply(`Uh oh! Invalid input\nPlease enter Hi/Hello to begin!`);
  }
});

client.on("disconnected", (reason) => {
  console.log("Client was logged out", reason);
});
