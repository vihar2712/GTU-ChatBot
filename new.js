const fs = require("fs");
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
const jsonStringStudent = fs.readFileSync("./students.json", "utf-8", (err) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
});
studentsData = JSON.parse(jsonStringStudent);
module.exports = {
  initial_msg: `Hello 👋\nReply with an appropriate option.\n\n 🔍 *Informative Section*: you will find all the useful stuff which will be useful to you.\n\n1️⃣ *Course* details.\n2️⃣ *Personal* details.\n3️⃣ *Get the latest circular* details.\n\n\n📚 *Academics Section*: Information related to academics.\n\n4️⃣Previous year *question papers* of gtu.\n5️⃣ Get *Bonafide Certificate*.\n6️⃣  Want to *build resume*?.\n7️⃣ Get *Design Engineering* material\n8️⃣ Raise a *Query*\n9️⃣ *Quit*`,
  course_details: `Which course you want to know about ?\n\n◾ CE(Computer Engineering)\n◾ IT(Information Technology)\n◾ ICT(Information and Communication Technology)\n◾ ME(Mechanical Engineering)\n◾ CL(Civil Engineering)`,
  paper_details: `➡️ CE-P(computer Engineering Papers)\n➡️ ME-P(Mechanical Engineering Papers)\n➡️ CL-P(Civil Engineering Papers)\n➡️ CEM-P(Chemical Engineering Papers)\n➡️ IT-P(Information Technology Papers)\n➡️ ICT-P(Information and communication Technology Papers)\n`,
  bonafidemsg: `◾ A photocopy of the College ID card thus attached with the Application form.\n◾ A copy of the latest fee receipt is thus to be attached with the above form. To make sure that the child is still a student of the college.`,
  query: `You can contact us on\n📞 079-23267521 / 079-23267570 \n📧 info@gtu.ac.in / registrar@gtu.ac.in\n📝 https://forms.gle/vfmQaWPWvwsFQcCb6`,
  quit: `Thank you for using GTU bot, looking forward to see you again`,
  ce_description:
    `Description of computer engineering course: ${courseData["CE"].desc}\n📝 Top Companies hiring computer engineers 📝\n1: ${courseData["CE"].companies[0].name}\n👉Company Size: ${courseData["CE"].companies[0].size}\n👉More Info: ${courseData["CE"].companies[0].link}\n---------------------------------------------------------------------\n2: ${courseData["CE"].companies[1].name}\n👉Company Size: ${courseData["CE"].companies[1].size}\n👉More Info: ${courseData["CE"].companies[1].link}\n-------------------------\n3: ${courseData["CE"].companies[2].name}\n👉Company Size: ${courseData["CE"].companies[2].size}\n👉More Info: ${courseData["CE"].companies[2].link}\n-------------------------\n4: ${courseData["CE"].companies[3].name}\n👉Company Size: ${courseData["CE"].companies[3].size}\n👉More Info: ${courseData["CE"].companies[3].link}\n-------------------------\n5: ${courseData["CE"].companies[4].name}\n👉Company Size: ${courseData["CE"].companies[4].size}
    \n👉More Info: ${courseData["CE"].companies[4].link}\n\n🎓Top Colleges\n1: ${courseData["CE"].colleges[0].name}\nOwnership 💼: ${courseData["CE"].colleges[0].ownership}\n🗓️ ${courseData["CE"].colleges[0].established}\n💰 fees:${courseData["CE"].colleges[0].fees}\n👆 More Information: ${courseData["CE"].colleges[0].link}\n\n--------------------------\n\n2: ${courseData["CE"].colleges[1].name}\nOwnership 💼: ${courseData["CE"].colleges[1].ownership}\n🗓️ ${courseData["CE"].colleges[1].established}\n💰 fees:${courseData["CE"].colleges[1].fees}\n👆 More Information: ${courseData["CE"].colleges[1].link}\n\n----------------------------\n\n3: ${courseData["CE"].colleges[2].name}\nOwnership 💼: ${courseData["CE"].colleges[2].ownership}\n🗓️ ${courseData["CE"].colleges[2].established}\n💰 fees:${courseData["CE"].colleges[2].fees}\n👆 More Information: ${courseData["CE"].colleges[2].link}\n\n-----------------------------\n\n4: ${courseData["CE"].colleges[3].name}\nOwnership 💼: ${courseData["CE"].colleges[3].ownership}\n🗓️ ${courseData["CE"].colleges[3].established}\n💰 fees:${courseData["CE"].colleges[3].fees}\n👆 More Information: ${courseData["CE"].colleges[3].link}\n\n------------------------------\n\n5: ${courseData["CE"].colleges[4].name}\nOwnership 💼: ${courseData["CE"].colleges[4].ownership}\n🗓️ ${courseData["CE"].colleges[4].established}\n💰 fees:${courseData["CE"].colleges[4].fees}\n👆 More Information: ${courseData["CE"].colleges[4].link}\n\n-------------------------------\n\n6:  ${courseData["CE"].colleges[5].name}\nOwnership 💼: ${courseData["CE"].colleges[5].ownership}\n🗓️ ${courseData["CE"].colleges[5].established}\n💰 fees:${courseData["CE"].colleges[5].fees}\n👆 More Information: ${courseData["CE"].colleges[5].link}\n` +
    "\n============================\nPress # to return to the main menu 👈",

  it_description:
    `Description of IT engineering course: ${courseData["IT"].desc}\n===========================\nTop Companies hiring computer engineers\n-----------------------\nCompany Name: ${courseData["IT"].companies[0].name}\nCompany Size: ${courseData["IT"].companies[0].size}\nMore Info: ${courseData["IT"].companies[0].link}\n-------------------------\nCompany Name: ${courseData["IT"].companies[1].name}\nCompany Size: ${courseData["IT"].companies[1].size}\nMore Info: ${courseData["IT"].companies[1].link}\n-------------------------\nCompany Name: ${courseData["IT"].companies[2].name}\nCompany Size: ${courseData["IT"].companies[2].size}\nMore Info: ${courseData["IT"].companies[2].link}\n-------------------------\nCompany Name: ${courseData["IT"].companies[3].name}\nCompany Size: ${courseData["IT"].companies[3].size}\nMore Info: ${courseData["IT"].companies[3].link}\n-------------------------
    \nCompany Name: ${courseData["IT"].companies[4].name}\nCompany Size: ${courseData["IT"].companies[4].size}
    \nMore Info: ${courseData["IT"].companies[4].link}
    
                    \n===========================\n-------Top Colleges-------\n------------------------------\n\nName: ${courseData["IT"].colleges[0].name}
                    \nOwnership: ${courseData["IT"].colleges[0].ownership}\n${courseData["IT"].colleges[0].established}\nfees:${courseData["IT"].colleges[0].fees} \nMore Information: ${courseData["IT"].colleges[0].link}\n\n--------------------------\n\nName: ${courseData["IT"].colleges[1].name}\nOwnership: ${courseData["IT"].colleges[1].ownership}\n${courseData["IT"].colleges[1].established}\nfees:${courseData["IT"].colleges[1].fees}\nMore Information: ${courseData["IT"].colleges[1].link}\n\n----------------------------\n\nName: ${courseData["IT"].colleges[2].name}\nOwnership: ${courseData["IT"].colleges[2].ownership}\n${courseData["IT"].colleges[2].established}\nfees:${courseData["IT"].colleges[2].fees}\nMore Information: ${courseData["IT"].colleges[2].link}\n\n-----------------------------\n\nName: ${courseData["IT"].colleges[3].name}\nOwnership: ${courseData["IT"].colleges[3].ownership}\n${courseData["IT"].colleges[3].established}\nfees:${courseData["IT"].colleges[3].fees}\nMore Information: ${courseData["IT"].colleges[3].link}\n\n------------------------------\n\nName: ${courseData["IT"].colleges[4].name}\nOwnership: ${courseData["IT"].colleges[4].ownership}\n${courseData["IT"].colleges[4].established}\nfees:${courseData["IT"].colleges[4].fees}\nMore Information: ${courseData["IT"].colleges[4].link}\n\n-------------------------------\n\nName: ${courseData["IT"].colleges[5].name}\nOwnership: ${courseData["IT"].colleges[5].ownership}\n${courseData["IT"].colleges[5].established}\nfees:${courseData["IT"].colleges[5].fees}\nMore Information: ${courseData["IT"].colleges[5].link}\n` +
    "\n============================\nPress # to return to the main menu",
  ict_description:
    `Description of ICT engineering course: ${courseData["ICT"].desc}
    \n===========================\nTop Companies hiring computer engineers\n-------------------------\nCompany Name: ${courseData["ICT"].companies[0].name}\nCompany Size: ${courseData["ICT"].companies[0].size}
    \nMore Info: ${courseData["ICT"].companies[0].link}\n-------------------------
    \nCompany Name: ${courseData["ICT"].companies[1].name}\nCompany Size: ${courseData["ICT"].companies[1].size}\nMore Info: ${courseData["ICT"].companies[1].link}\n-------------------------\nCompany Name: ${courseData["ICT"].companies[2].name}\nCompany Size: ${courseData["ICT"].companies[2].size}\nMore Info: ${courseData["ICT"].companies[2].link}\n-------------------------\nCompany Name: ${courseData["ICT"].companies[3].name}\nCompany Size: ${courseData["ICT"].companies[3].size}
    \nMore Info: ${courseData["ICT"].companies[3].link}\n-------------------------\nCompany Name: ${courseData["ICT"].companies[4].name}\nCompany Size: ${courseData["ICT"].companies[4].size}\nMore Info: ${courseData["ICT"].companies[4].link}

    \n===========================\n-------Top Colleges-------\n------------------------------\n\nName: ${courseData["ICT"].colleges[0].name}
    \nOwnership: ${courseData["ICT"].colleges[0].ownership}\n${courseData["ICT"].colleges[0].established}\nfees:${courseData["ICT"].colleges[0].fees} \nMore Information: ${courseData["ICT"].colleges[0].link}\n\n--------------------------\n\nName: ${courseData["ICT"].colleges[1].name}\nOwnership: ${courseData["ICT"].colleges[1].ownership}\n${courseData["ICT"].colleges[1].established}\nfees:${courseData["ICT"].colleges[1].fees}\nMore Information: ${courseData["ICT"].colleges[1].link}\n\n----------------------------\n\nName: ${courseData["ICT"].colleges[2].name}\nOwnership: ${courseData["ICT"].colleges[2].ownership}\n${courseData["ICT"].colleges[2].established}\nfees:${courseData["ICT"].colleges[2].fees}\nMore Information: ${courseData["ICT"].colleges[2].link}\n\n-----------------------------\n\nName: ${courseData["ICT"].colleges[3].name}\nOwnership: ${courseData["ICT"].colleges[3].ownership}\n${courseData["ICT"].colleges[3].established}\nfees:${courseData["ICT"].colleges[3].fees}\nMore Information: ${courseData["ICT"].colleges[3].link}\n\n------------------------------\n\nName: ${courseData["ICT"].colleges[4].name}\nOwnership: ${courseData["ICT"].colleges[4].ownership}\n${courseData["ICT"].colleges[4].established}\nfees:${courseData["ICT"].colleges[4].fees}\nMore Information: ${courseData["ICT"].colleges[4].link}\n\n-------------------------------\n\nName: ${courseData["ICT"].colleges[5].name}
    \nOwnership: ${courseData["ICT"].colleges[5].ownership}\n${courseData["ICT"].colleges[5].established}\nfees:${courseData["ICT"].colleges[5].fees}\nMore Information: ${courseData["ICT"].colleges[5].link}\n` +
    "\n============================\nPress # to return to the main menu",

  me_description:
    `Description of MECHANICAL engineering course: ${courseData["ME"].desc}
  \n===========================\nTop Companies hiring computer engineers\n-------------------------\nCompany Name: ${courseData["ME"].companies[0].name}\nCompany Size: ${courseData["ME"].companies[0].size}
  \nMore Info: ${courseData["ME"].companies[0].link}\n-------------------------
  \nCompany Name: ${courseData["ME"].companies[1].name}\nCompany Size: ${courseData["ME"].companies[1].size}\nMore Info: ${courseData["ME"].companies[1].link} \n-------------------------\nCompany Name: ${courseData["ME"].companies[2].name}\nCompany Size: ${courseData["ME"].companies[2].size}\nMore Info: ${courseData["ME"].companies[2].link}\n-------------------------\nCompany Name: ${courseData["ME"].companies[3].name}\nCompany Size: ${courseData["ME"].companies[3].size}\nMore Info: ${courseData["ME"].companies[3].link}\n-------------------------\nCompany Name: ${courseData["ME"].companies[4].name}\nCompany Size: ${courseData["ME"].companies[4].size}\nMore Info: ${courseData["ME"].companies[4].link}

  \n===========================\n-------Top Colleges-------\n------------------------------\n\nName: ${courseData["ME"].colleges[0].name}
  \nOwnership: ${courseData["ME"].colleges[0].ownership}\n${courseData["ME"].colleges[0].established}\nfees:${courseData["ME"].colleges[0].fees} \nMore Information: ${courseData["ME"].colleges[0].link}\n\n--------------------------\n\nName: ${courseData["ME"].colleges[1].name}\nOwnership: ${courseData["ME"].colleges[1].ownership}\n${courseData["ME"].colleges[1].established}\nfees:${courseData["ME"].colleges[1].fees}\nMore Information: ${courseData["ME"].colleges[1].link}\n\n----------------------------\n\nName: ${courseData["ME"].colleges[2].name}\nOwnership: ${courseData["ME"].colleges[2].ownership}\n${courseData["ME"].colleges[2].established}\nfees:${courseData["ME"].colleges[2].fees}\nMore Information: ${courseData["ME"].colleges[2].link}\n\n-----------------------------\n\nName: ${courseData["ME"].colleges[3].name}\nOwnership: ${courseData["ME"].colleges[3].ownership}\n${courseData["ME"].colleges[3].established}\nfees:${courseData["ME"].colleges[3].fees}\nMore Information: ${courseData["ME"].colleges[3].link}\n\n------------------------------\n\nName: ${courseData["ME"].colleges[4].name}\nOwnership: ${courseData["ME"].colleges[4].ownership}\n${courseData["ME"].colleges[4].established}\nfees:${courseData["ME"].colleges[4].fees}\nMore Information: ${courseData["ME"].colleges[4].link}\n\n-------------------------------\n\nName: ${courseData["ME"].colleges[5].name}\nOwnership: ${courseData["ME"].colleges[5].ownership}\n${courseData["ME"].colleges[5].established}\nfees:${courseData["ME"].colleges[5].fees}\nMore Information: ${courseData["ME"].colleges[5].link}\n` +
    "\n============================\nPress # to return to the main menu",

  cl_description:
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
    "\n============================\nPress # to return to the main menu",

  informative_section: `Hello 👋\nReply with an appropriate option.\n\n 🔍 *Informative Section*: you will find all the useful stuff which will be useful to you.\n\n1️⃣ *Course* details.\n2️⃣ *Personal* details.\n3️⃣ *Get the latest circular* details.\n\n\n📚 *Academics Section*: Information related to academics.\n\n4️⃣Previous year *question papers* of gtu.\n5️⃣ Get *Bonafide Certificate*.\n6️⃣  Want to *build resume*?.\n7️⃣ Get *Design Engineering* material\n8️⃣ Raise a *Query*\n9️⃣ *Quit*`,

  ce_papers: `📅: ${courseData["CE"].papers[0].year}\n1️⃣: ${courseData["CE"].papers[0].link}\n📅: ${courseData["CE"].papers[1].year}\n2️⃣: ${courseData["CE"].papers[1].link}\n📅: ${courseData["CE"].papers[2].year}\n3️⃣: ${courseData["CE"].papers[2].link}\n`,
  egd_material: `Canvases \n*AEIOU canvas* \nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/AEIOU%20Summary%20Canvas%20-%20A1%20size.jpg \n\n*Empathy Mapping canvas* \nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/Empathy%20Mapping%20canvas%20-%20A1%20size.png \n\n*Ideation canvas* \nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/Ideation%20Canvas_A1%20size.jpg \n\n*Product Development canvas* \nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/Product%20Development%20Canvas_A1%20size.pdf \n\n*Business Model canvas* \nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/Product%20Development%20Canvas_A1%20size.pdf \n\n*LNM matrix canvas*\nhttps://www.de.gtu.ac.in/Content/Images/MethodologyCanvas/LNM_A2%20size.png`,
};
