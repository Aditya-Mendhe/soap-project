// Single place to edit project details, team, gallery and submission link.
export const PROJECT_DRIVE_URL = ""; // e.g. "https://drive.google.com/..." (leave empty until ready)

export const PROJECT = {
  title: "Soap Preparation: A Chemical Prototyping Project",
  college: "MIT Academy of Engineering (MITAOE), Alandi, Pune",
  department: "Computer Engineering (Software Engineering)",
  year: "SY B.Tech",
  subject: "Chemical Prototyping",
};

export const TEAM = [
  { name: "Aditya Mendhe", prn: "202501100058" },
  { name: "Gaurav Kotkar", prn: "202501100051" },
  { name: "Sumit Tayade", prn: "202501100046" },
];

// Put your photos in /public/gallery and update src paths. 3-4 images recommended; "pos" sets the crop focus (CSS object-position).
export const GALLERY = [
  { src: "/gallery/photo-1.jpg", pos: "50% 60%", caption: "Team members pouring a liquid into a beaker placed on a stand in the laboratory." },
  { src: "/gallery/photo-2.jpg", pos: "50% 45%", caption: "Transferring a clear liquid into a beaker at the laboratory bench." },
  { src: "/gallery/photo-3.jpg", pos: "50% 55%", caption: "Preparing materials at the laboratory bench, with beakers and a burner nearby." },
];
export const FALLBACK_IMAGE = "/gallery/photo-1.svg";
