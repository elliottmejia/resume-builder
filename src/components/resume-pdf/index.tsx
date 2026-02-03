import {
  Document,
  Page,
  Text,
  View,
  Link,
  Font,
} from "@react-pdf/renderer";

// Disable hyphenation - words wrap to next line instead of breaking with "-"
Font.registerHyphenationCallback((word) => [word]);
import {
  infoData,
  experienceData,
  skillsData,
  eduData,
  certData,
  currentProjects,
} from "data/data";
import { styles } from "./styles";

const MAX_BULLETS_PER_JOB = 9;

const ResumePDF = () => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Left Column */}
      <View style={styles.leftColumn}>
        {/* Name */}
        <Text style={styles.name}>{infoData.name}</Text>

        {/* Contact */}
        <Text style={styles.sectionTitle}>Contact</Text>
        {infoData.tel && (
          <Text style={styles.contactItem}>{infoData.tel}</Text>
        )}
        {infoData.email && (
          <Link src={`mailto:${infoData.email}`} style={styles.contactLink}>
            {infoData.email}
          </Link>
        )}
        {infoData.portfolio && (
          <Link src={infoData.portfolio} style={styles.contactLink}>
            {infoData.portfolioShort || infoData.portfolio}
          </Link>
        )}
        {infoData.linkedin && (
          <Link src={infoData.linkedin} style={styles.contactLink}>
            {infoData.linkedinShort || "LinkedIn"}
          </Link>
        )}

        {/* Skills */}
        <Text style={styles.sectionTitle}>Skills</Text>
        {skillsData.map((category, idx) => (
          <View key={idx} style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>{category.title}</Text>
            <Text style={styles.skillText}>{category.skills.join(", ")}</Text>
          </View>
        ))}

        {/* Education */}
        <Text style={styles.sectionTitle}>Education</Text>
        {eduData.map((edu, idx) => (
          <View key={idx} style={styles.educationItem}>
            <Text style={styles.educationInstitution}>{edu.institution}</Text>
            <Text style={styles.educationDetails}>{edu.degree}</Text>
            <Text style={styles.educationDetails}>
              {edu.startDate} - {edu.endDate}
            </Text>
          </View>
        ))}

        {/* Current Projects */}
        <Text style={styles.sectionTitle}>Current Projects</Text>
        {currentProjects.map((project, idx) => (
          <View key={idx} style={styles.projectItem}>
            <Text style={styles.projectText}>{project}</Text>
          </View>
        ))}
      </View>

      {/* Right Column */}
      <View style={styles.rightColumn}>
        {/* Experience */}
        <Text style={styles.sectionTitleFirst}>Experience</Text>
        {experienceData.map((job, idx) => (
          <View key={idx} style={styles.experienceItem}>
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text style={styles.companyLine}>
              {job.company} | {job.location} | {job.startDate} - {job.endDate}
            </Text>
            {job.entries.slice(0, MAX_BULLETS_PER_JOB).map((entry, bulletIdx) => (
              <View key={bulletIdx} style={styles.bulletContainer}>
                <Text style={styles.bulletText}>• {entry}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* Certifications */}
        <Text style={styles.sectionTitle}>Certifications</Text>
        {certData.map((issuer, idx) => (
          <View key={idx}>
            {issuer.certs.map((cert, certIdx) => (
              <View key={certIdx} style={styles.certItem}>
                <Text style={styles.certTitle}>
                  {cert.title}
                  <Text style={styles.certIssuer}>
                    {" "}— {issuer.issuer} • {cert.issueDate}
                  </Text>
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
