import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: 10,
    padding: 36, // 0.5 inch margins
  },
  leftColumn: {
    width: "30%",
    paddingRight: 15,
    borderRightWidth: 1,
    borderRightColor: "#e0e0e0",
  },
  rightColumn: {
    width: "70%",
    paddingLeft: 15,
  },
  name: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    marginBottom: 12,
    color: "#1a1a1a",
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    marginTop: 12,
    textTransform: "uppercase",
    color: "#333333",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 3,
  },
  sectionTitleFirst: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
    marginTop: 0,
    textTransform: "uppercase",
    color: "#333333",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 3,
  },
  contactItem: {
    fontSize: 9,
    marginBottom: 4,
    color: "#444444",
  },
  contactLink: {
    fontSize: 9,
    marginBottom: 4,
    color: "#0066cc",
    textDecoration: "none",
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#333333",
    marginBottom: 2,
  },
  skillText: {
    fontSize: 8,
    color: "#555555",
    lineHeight: 1.4,
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#1a1a1a",
  },
  companyLine: {
    fontSize: 9,
    color: "#666666",
    marginBottom: 5,
    marginTop: 1,
  },
  bulletPoint: {
    fontSize: 9,
    color: "#444444",
    marginBottom: 2,
    paddingLeft: 10,
    lineHeight: 1.3,
  },
  bullet: {
    position: "absolute",
    left: 0,
  },
  bulletContainer: {
    flexDirection: "row",
    marginBottom: 3,
    paddingLeft: 4,
  },
  bulletText: {
    fontSize: 9,
    color: "#444444",
    flex: 1,
    lineHeight: 1.38,
  },
  educationItem: {
    marginBottom: 6,
  },
  educationInstitution: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#333333",
  },
  educationDetails: {
    fontSize: 9,
    color: "#555555",
  },
  certItem: {
    marginBottom: 5,
  },
  certTitle: {
    fontSize: 9,
    color: "#444444",
  },
  certIssuer: {
    fontSize: 8,
    color: "#666666",
  },
  projectItem: {
    marginBottom: 5,
  },
  projectText: {
    fontSize: 9,
    color: "#444444",
  },
});
