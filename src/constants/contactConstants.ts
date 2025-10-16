export const SUBJECTS = ["general", "marketing", "branding"] as const;

export const subjectLabelMap: Record<typeof SUBJECTS[number], string> = {
  general: "General Inquiry",
  marketing: "Digital Marketing",
  branding: "Branding",
};
