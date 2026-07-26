/* =========================================================================
   WEBINARS  —  the ONLY file you edit to change the webinar listings.
   -------------------------------------------------------------------------
   To add a webinar: copy one { ... } block below, paste it, edit the fields.
   To remove one: delete its { ... } block (including the trailing comma).
   Past-dated webinars hide themselves automatically — no need to delete them.

   Fields:
     title     text shown as the card heading
     host      presenter / source line
     dateCST   start time in U.S. Central, 24-hour, "YYYY-MM-DDTHH:MM"
     durLabel  e.g. "1 hr", "30 min", "Half-day"
     endLabel  (optional) only for half-day events, e.g. "ends 3:30 PM ET"
     skills    any of: "ai","strategy","video","accessibility","lmsdocebo","authoring"
     overview  1-2 sentence description
     link      registration URL
   ========================================================================= */

/* EDIT MONTHLY: add/remove rows below. dateCST = start in U.S. Central, 24h.
   Past dates auto-hide. For half-day events set durLabel + endLabel. */
var WEBINARS=[
  { title:"The AI Implementation Guide for L&D: Book Release Celebration",
    host:"Megan Torrance · Training Magazine Network",
    dateCST:"2026-06-24T11:00", durLabel:"1 hr",
    skills:["ai","strategy"],
    overview:"Megan Torrance shares key insights from her new ATD Press book — moving teams past AI experimentation into real implementation, using the AI Implementation Canvas for planning, data strategy, and change management.",
    link:"https://www.trainingmagnetwork.com/events/4517" },

  { title:"Create Smarter, Not Harder: Docebo Creator Best Practices & New Features",
    host:"Paul Clance · eSkillz",
    dateCST:"2026-06-25T12:00", durLabel:"30 min",
    skills:["lmsdocebo","authoring"],
    overview:"A fast, hands-on tour of Docebo Creator — best practices and the newest features for building and publishing high-impact courses in a fraction of the time.",
    link:"https://eskillz.com/events/create-smarter-not-harder-docebo-creator-best-practices-new-features/#registration" },

  { title:"Avatars, Agents, & AI, Oh My!",
    host:"Mark Itskowitch · Training Magazine Network",
    dateCST:"2026-07-22T14:00", durLabel:"1 hr",
    skills:["ai","video"],
    overview:"HeyGen Ambassador Mark Itskowitch shows how AI video tools expand what one designer can produce — build a digital twin or use ready-made avatars to bring bold ideas to life affordably.",
    link:"https://www.trainingmagnetwork.com/events/4524" },

  { title:"How Pax8 Built a Best-in-Class Partner Education Program",
    host:"Olivia Reid · eSkillz",
    dateCST:"2026-07-30T12:00", durLabel:"1 hr",
    skills:["strategy","lmsdocebo"],
    overview:"Pax8's learning-tech team shares how they scaled partner education in Docebo — the strategies, tools, and decisions behind their Docebo Inspire Award for Best Customer Education Program.",
    link:"https://eskillz.com/events/how-pax8-built-a-best-in-class-partner-education-program/#registration" },

  { title:"ATD Demo Day: Assessments",
    host:"ATD",
    dateCST:"2026-08-17T10:55", durLabel:"Half-day", endLabel:"ends 3:30 PM ET",
    skills:["strategy"],
    overview:"Free half-day event with live 30-minute demos from five leading assessment tools — see each platform in action and compare solutions side by side to inform your buying decision.",
    link:"https://webinars.td.org/atd-demo-day-assessments-august-2026" },

  { title:"The ADHD-Friendly LMS: Designing for Focus in a Distracted World",
    host:"Sheila James · eSkillz",
    dateCST:"2026-08-27T12:00", durLabel:"1 hr",
    skills:["accessibility","lmsdocebo"],
    overview:"Sheila James reprises her Docebo Inspire session on designing LMS experiences that support focus — practical strategies to reduce friction and build accessible, learner-centered training for everyone.",
    link:"https://eskillz.com/events/the-adhd-friendly-lms-designing-for-focus-in-a-distracted-world/#registration" },

  { title:"ATD Demo Day: Augment L&D with AI",
    host:"ATD",
    dateCST:"2026-06-22T10:55", durLabel:"Half-day", endLabel:"ends 3:30 PM ET",
    skills:["ai","strategy"],
    overview:"Free half-day event with live 30-minute demos from five learning-tech vendors (SmartWinnr, Administrate, The Regis Company, Chronus, Cornerstone) — see AI-driven L&D solutions in action and compare options side by side.",
    link:"https://webinars.td.org/demo-day-augment-ld-with-ai-june-2026" },

  { title:"Crafting Choices That Challenge: Designing Scenarios for Authentic Practice",
    host:"Christy Tucker · Training Magazine Network",
    dateCST:"2026-07-15T14:00", durLabel:"1 hr",
    skills:["strategy"],
    overview:"Techniques for writing scenario choices and distractors that give learners authentic decision-making practice: how to find the decisions that drive performance, mine real mistakes for believable wrong answers, and write consequences that actually teach.",
    link:"https://www.trainingmagnetwork.com/events/4499" },

  { title:"Reveal, Explore, Learn: Designing Content That Unfolds with the Learner",
    host:"Sharath Ramaswamy · Training Magazine Network",
    dateCST:"2026-07-16T11:00", durLabel:"1 hr",
    skills:["authoring","strategy"],
    overview:"How progressive disclosure turns content-heavy courses into learner-driven experiences. Structure content in layers to cut cognitive overload and boost retention, with live examples built in Adobe Captivate.",
    link:"https://www.trainingmagnetwork.com/events/4519" },

  { title:"Branching Scenarios Made Easy: A Beginner's Guide to Adaptive Design",
    host:"Garima Gupta · Training Magazine Network",
    dateCST:"2026-08-04T11:00", durLabel:"1 hr",
    skills:["ai","strategy"],
    overview:"Build branching scenarios without coding or heavy writing. Use ChatGPT to rapidly prototype realistic dialogue, tough choices, and meaningful consequences, plus a beginner-friendly framework for adaptive decision trees.",
    link:"https://www.trainingmagnetwork.com/events/4370" },

  { title:"Make Blended Learning Stickier with Science",
    host:"Karen Hyder & Melissa Chambers · Training Magazine Network",
    dateCST:"2026-08-11T14:00", durLabel:"1 hr",
    skills:["strategy"],
    overview:"Learning science and insights from the Training Conference Virtual Engagement Lab, applied to blended learning that stays engaging and drives retention even when the ask is faster, shorter, and more scalable.",
    link:"https://www.trainingmagnetwork.com/events/4494" },

  { title:"Rules of Engagement for Highly Engaging Virtual Learning",
    host:"Rick Altman · Training Magazine Network",
    dateCST:"2026-08-13T11:00", durLabel:"1 hr",
    skills:["strategy"],
    overview:"Broadcasting techniques mixed with fresh tactics for connecting with learners you cannot see over Zoom, Teams, and Connect, turning the limits of virtual delivery into an advantage that makes audiences sit up.",
    link:"https://www.trainingmagnetwork.com/events/4520" },

  { title:"Story-based Technical Training: A How-To Session",
    host:"Rance Greene · Training Magazine Network",
    dateCST:"2026-08-19T11:00", durLabel:"1 hr",
    skills:["strategy"],
    overview:"Even software, machine, and safety training can be story-driven. Practical steps from the Instructional Story Design method for turning dry technical content into humanized, performance-focused learning.",
    link:"https://www.trainingmagnetwork.com/events/4361" },

  { title:"Rise on Steroids: Elevating Your Course Functionality with Simple Custom Blocks",
    host:"Garima Gupta · Training Magazine Network",
    dateCST:"2026-09-10T11:00", durLabel:"1 hr",
    skills:["ai","authoring"],
    overview:"Push past Rise's standard block library with AI-generated custom blocks. Vibe-code functional HTML, CSS, and JS from plain descriptions and wire in AI APIs for dynamic interactions like instant-feedback generators, no JavaScript expertise required.",
    link:"https://www.trainingmagnetwork.com/events/4371" }
];
