import Accordion from "react-bootstrap/Accordion";
import "./App.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fname: "",
    lname: "",
    about: "",
    photo: "",
    country: "",
    city: "",
    email: "",
    contact: "",
    jobTitle: "",
    git: "",
    linkedIn: "",
  });
  const pdfRef = useRef();
  const [educationSections, setEducationSections] = useState([
    { id: "", college: "", degree: "", start: "", end: "", grade: "" },
  ]);
  const [experienceSections, setExperienceSections] = useState([
    {
      id: "",
      company: "",
      designation: "",
      start: "",
      end: "",
      description: "",
    },
  ]);
  const [skillSections, setSkillSections] = useState([
    { id: "", skill: "", proficiency: "" },
  ]);

  const now = 60;
  let experience = [];

  const addExperience = () => {
    const newId =
      experienceSections.length > 0
        ? experienceSections[experienceSections.length - 1].id + 1
        : 1;
    setExperienceSections((prevSections) => [
      ...prevSections,
      {
        id: prevSections.length + 1,
        company: "",
        designation: "",
        start: "",
        end: "",
        description: "",
      },
    ]);
  };
  const deleteExperience = (id) => {
    setExperienceSections((prevSections) =>
      prevSections.filter((section) => section.id !== id)
    );
  };
  const addEducation = () => {
    setEducationSections((prevSections) => [
      ...prevSections,
      {
        id: prevSections.length + 1,
        college: "",
        degree: "",
        start: "",
        end: "",
        grade: "",
      },
    ]);
  };

  const deleteEducation = (id) => {
    setEducationSections((prevSections) =>
      prevSections.filter((section) => section.id !== id)
    );
  };

  const addSkill = () => {
    const newId =
      skillSections.length > 0
        ? skillSections[skillSections.length - 1].id + 1
        : 1;
    setSkillSections((prevSections) => [
      ...prevSections,
      { id: newId, skill: "", proficiency: "" },
    ]);
  };
  const deleteSkill = (id) => {
    setSkillSections((prevSections) =>
      prevSections.filter((section) => section.id !== id)
    );
  };
  const updateEducationData = (id, field, value) => {
    setEducationSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const updateExperienceData = (id, field, value) => {
    setExperienceSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const updateSkillData = (id, field, value) => {
    setSkillSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };
  function downloadPdf() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }
  // let score=0
  //  if(personalDetails){
  //   score+20
  //  }


  return (
    <div
      className="App"
      style={{ display: "grid", gridTemplateColumns: "50% auto" }}
    >
      <div className="left text-start">
        <div style={{ margin: "10% 10%" }}>
          <div className="score">
            <ProgressBar now={now} label={`${now}%`} />;
          </div>
          <section className="personal ">
            <h3>Personal Details</h3>

            <div className="grid ">
              <div className="row">
                <div className="col container">
                  <label className="row" style={{ marginTop: "2%" }}>
                    Wanted Job Title
                  </label>
                  <input
                    className="row  border-3 rounded  bg-body-secondary"
                    type="text"
                    style={{ marginTop: "1%" }}
                    value={personalDetails.jobTitle}
                    onChange={(e) =>
                      setPersonalDetails((prevDetails) => ({
                        ...prevDetails,
                        jobTitle: e.target.value,
                      }))
                    }
                  ></input>
                </div>
                <div className="col  container">
                  <label className="row">Upload Photo</label>
                  <input
                    className="row"
                    type="file"
                    value={personalDetails.photo}
                    onChange={(e) =>
                      setPersonalDetails((prevDetails) => ({
                        ...prevDetails,
                        photo: e.target.value,
                      }))
                    }
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col container">
                  <label className="row" style={{ marginTop: "2%" }}>
                    First Name
                  </label>
                  <input
                    className="row  border-3 rounded  bg-body-secondary"
                    type="text"
                    style={{ marginTop: "1%" }}
                    value={personalDetails.fname}
                    onChange={(e) =>
                      setPersonalDetails((prevDetails) => ({
                        ...prevDetails,
                        fname: e.target.value,
                      }))
                    }
                  ></input>
                </div>
                <div className="col container">
                  <label className="row" style={{ marginTop: "2%" }}>
                    Last Name
                  </label>
                  <input
                    className="row  border-3 rounded  bg-body-secondary"
                    type="text"
                    style={{ marginTop: "1%" }}
                    value={personalDetails.lname}
                    onChange={(e) =>
                      setPersonalDetails((prevDetails) => ({
                        ...prevDetails,
                        lname: e.target.value,
                      }))
                    }
                  ></input>
                </div>
              </div>
              <div className="row">
                {/* <div className="col container">
                  <label className="row">Wanted Job Title</label>
                  <input className="row" type="text"></input>
                </div> */}
                <div className="col container">
                  <label className="row" style={{ marginTop: "2%" }}>
                    Email
                  </label>
                  <input
                    className="row  border-3 rounded  bg-body-secondary"
                    type="email"
                    style={{ marginTop: "1%" }}
                    value={personalDetails.email}
                    onChange={(e) =>
                      setPersonalDetails((prevDetails) => ({
                        ...prevDetails,
                        email: e.target.value,
                      }))
                    }
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col container">
                  <label className="row" style={{ marginTop: "2%" }}>
                    Contact Number
                  </label>
                  <input
                    className="row  border-3 rounded  bg-body-secondary"
                    type="number"
                    style={{ marginTop: "1%" }}
                    value={personalDetails.contact}
                    onChange={(e) =>
                      setPersonalDetails((prevDetails) => ({
                        ...prevDetails,
                        contact: e.target.value,
                      }))
                    }
                  ></input>
                </div>

                <div className="col container">
                  <label className="row" style={{ marginTop: "2%" }}>
                    Country{" "}
                  </label>
                  <input
                    className="row  border-3 rounded  bg-body-secondary"
                    type="text"
                    style={{ marginTop: "1%" }}
                    value={personalDetails.country}
                    onChange={(e) =>
                      setPersonalDetails((prevDetails) => ({
                        ...prevDetails,
                        country: e.target.value,
                      }))
                    }
                  ></input>
                </div>
              </div>
              <div className="row " style={{ marginTop: "2%" }}>
                <div className="container ">
                  <label className="row row-gap-3">City</label>
                  <input
                    style={{ marginTop: "1%" }}
                    className="row  border-3 rounded  bg-body-secondary"
                    type="text"
                    value={personalDetails.city}
                    onChange={(e) =>
                      setPersonalDetails((prevDetails) => ({
                        ...prevDetails,
                        city: e.target.value,
                      }))
                    }
                  ></input>
                </div>
              </div>
            </div>
          </section>
          <section className="professional" style={{ marginTop: "2%" }}>
            <h3>Professional Details</h3>
            <div style={{ marginTop: "2%" }}>
              <label>About You</label>
              <input
                type="text"
                style={{ marginTop: "1%" }}
                className="row  border-3 rounded  bg-body-secondary"
                value={personalDetails.about}
                onChange={(e) =>
                  setPersonalDetails((prevDetails) => ({
                    ...prevDetails,
                    about: e.target.value,
                  }))
                }
              ></input>
            </div>
          </section>

          <section className="experience">
            <h3>Experience</h3>
            <Button onClick={addExperience}>Add experience</Button>
             <Accordion>
              {experienceSections.map((section) => (
                <Accordion.Item
                  key={section.id}
                  eventKey={section.id.toString()}
                >
                  <Accordion.Header>{section.id}</Accordion.Header>
                  <Accordion.Body>
                    <div className="row">
                      <div className="col container">
                        <label className="row">Company Name</label>
                        <input
                          className="row"
                          type="text"
                          onChange={(e) =>
                            updateExperienceData(
                              section.id,
                              "company",
                              e.target.value
                            )
                          }
                        ></input>
                      </div>
                      <div className="col  container">
                        <label className="row">Designation</label>
                        <input
                          className="row"
                          type="text"
                          onChange={(e) =>
                            updateExperienceData(
                              section.id,
                              "designation",
                              e.target.value
                            )
                          }
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col  container">
                        <label className="row">Start Date</label>
                        <input
                          className="row"
                          type="date"
                          onChange={(e) =>
                            updateExperienceData(
                              section.id,
                              "start",
                              e.target.value
                            )
                          }
                        ></input>
                      </div>
                      <div className="col  container">
                        <label className="row">End Date</label>
                        <input
                          className="row"
                          type="date"
                          onChange={(e) =>
                            updateExperienceData(
                              section.id,
                              "end",
                              e.target.value
                            )
                          }
                        ></input>
                      </div>
                    </div>
                    <div className="row text-start">
                      <span>Description</span>
                      <textarea
                        class="form-control"
                        aria-label="Descrip"
                        onChange={(e) =>
                          updateExperienceData(
                            section.id,
                            "description",
                            e.target.value
                          )
                        }
                      ></textarea>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => deleteExperience(section.id)}
                    >
                      Delete Education
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </section>
          <section className="education">
            <h3>Education</h3>
            <Button onClick={addEducation}>Add Education</Button>
            {
              <Accordion>
                {educationSections.map((section) => (
                  <Accordion.Item
                    key={section.id}
                    eventKey={section.id.toString()}
                  >
                    <Accordion.Header>{section.id}</Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        <div className="col container">
                          <label className="row">College</label>
                          <input
                            className="row"
                            type="text"
                            onChange={(e) =>
                              updateEducationData(
                                section.id,
                                "college",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="col container">
                          <label className="row">Degree</label>
                          <input
                            className="row"
                            type="text"
                            onChange={(e) =>
                              updateEducationData(
                                section.id,
                                "degree",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col container">
                          <label className="row">Start Date</label>
                          <input
                            className="row"
                            type="date"
                            onChange={(e) =>
                              updateEducationData(
                                section.id,
                                "start",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="col container">
                          <label className="row">End Date</label>
                          <input
                            className="row"
                            type="date"
                            onChange={(e) =>
                              updateEducationData(
                                section.id,
                                "end",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                      <Button
                        variant="danger"
                        onClick={() => deleteEducation(section.id)}
                      >
                        Delete Education
                      </Button>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            }
          </section>
          <section className="skills">
            <h3>Skills</h3> <Button onClick={addSkill}>Add Skill</Button>
            <Accordion>
              {skillSections.map((section) => (
                <Accordion.Item
                  key={section.id}
                  eventKey={section.id.toString()}
                >
                  <Accordion.Header>{section.id}</Accordion.Header>
                  <Accordion.Body>
                    <label>Skill</label>
                    <input
                      type="text"
                      onChange={(e) =>
                        updateSkillData(section.id, "skill", e.target.value)
                      }
                    ></input>
                    <label>proficiency(1-10)</label>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      onChange={(e) =>
                        updateSkillData(
                          section.id,
                          "proficiency",
                          e.target.value
                        )
                      }
                    ></input>
                    <Button
                      variant="danger"
                      onClick={() => deleteSkill(section.id)}
                    >
                      Delete Education
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </section>
          <section className="sociallinks">
            <h3>Links</h3>
            <div>
              <label>Github</label>
              <input
                type="link"
                className="row  border-3 rounded  bg-body-secondary"
                value={personalDetails.git}
                onChange={(e) =>
                  setPersonalDetails((prevDetails) => ({
                    ...prevDetails,
                    git: e.target.value,
                  }))
                }
              ></input>
            </div>
            <div>
              <label>LinkedIn</label>
              <input
                type="link"
                className="row  border-3 rounded  bg-body-secondary"
                value={personalDetails.linkedIn}
                onChange={(e) =>
                  setPersonalDetails((prevDetails) => ({
                    ...prevDetails,
                    linkedIn: e.target.value,
                  }))
                }
              ></input>
            </div>
            <div>
              <label>Hacker Rank</label>
              <input
                type="link"
                className="row  border-3 rounded  bg-body-secondary"
                value={personalDetails.hackerRank}
                onChange={(e) =>
                  setPersonalDetails((prevDetails) => ({
                    ...prevDetails,
                    hackerRank: e.target.value,
                  }))
                }
              ></input>
            </div>
          </section>
        </div>
      </div>
      <div className="right bg-secondary ">
        <div
          className=" bg-secondary py-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Button
            className="bg-primary text-white"
            style={{ border: "none", marginBottom: "2%", marginLeft:"80%" }}
            onClick={downloadPdf}
          >
            Download PDF
          </Button>
          <div
            className=" w-75 h-75"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              id="divToPrint"
              ref={pdfRef}
              className="bg-white  grid"
              style={{
                width: "100%",
                height: "80vh",
                display: "grid",
                gridTemplateColumns: "35% 65%",
              }}
            >
              <div
                className="col bg-success text-white text-start p-2 position-relative width-30%"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {/* <div>{personalDetails.photo}</div> */}
                <div className="desc">{`${personalDetails.fname} ${personalDetails.lname}`}</div>
                <div>
                  <div className="heading">Details</div>
                  {personalDetails.city && (
                    <div className="heading">Address</div>
                  )}
                  <div className="desc">{`${personalDetails.city} ${personalDetails.country}`}</div>
                  {personalDetails.contact && (
                    <div className="heading">Phone</div>
                  )}

                  <div className="desc">{personalDetails.contact}</div>
                  {personalDetails.email && (
                    <div className="heading">Email</div>
                  )}
                  <div className="desc">{personalDetails.email}</div>
                </div>
                <div>
                  <div className="heading">Links</div>
                  <div className="desx">{personalDetails.git}</div>
                  <div className="desc">{personalDetails.linkedIn}</div>
                  <div className="desc">{personalDetails.hackerRank}</div>
                </div>
               <div>
                  <div className="heading">Skills</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      wordWrap: "break-word",
                    }}
                    className="text-start desc"
                  >
                    {skillSections.map((skill) => (
                      <div key={skill.id}>
                        <div>
                          <strong>{skill.skill}</strong>
                        </div>
                        <div>
                          <ProgressBar
                            style={{height:"5px"}}
                            now={skill.proficiency * 10}
                            label={`${skill.proficiency}%`}
                            visuallyHidden
                          />
                          ;
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col px-3">
                <div
                  style={{
                    // wordWrap: "break-word",
                    // textOverflow: "ellipsis",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {personalDetails.about && (<div className="heading">Profile:</div>)}
                  <div
                    className="text-start desc"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      wordWrap: "break-word",
                    }}
                  >
                    {personalDetails.about}
                  </div>
                </div>
             <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="heading">Experience:</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      wordWrap: "break-word",
                    }}
                    className="text-start"
                  >
                    {experienceSections.map((exp) => (
                      <div key={exp.id}>
                        <div className="heading">
                          <strong>{exp.company}</strong>
                        </div>
                        <div className="heading">
                          <strong>{exp.designation}</strong>
                        </div>
                        <div className="lead desc">{`${exp.start}-${exp.end}`}</div>
                        <div className="lead desc">{exp.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="heading">Education:</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      wordWrap: "break-word",
                    }}
                    className="text-start"
                  >
                    {educationSections.map((edu) => (
                      <div key={edu.id}>
                        <div className="heading">
                          <strong>{edu.college}</strong>
                        </div>
                        <div className="heading">
                          <strong>{edu.degree}</strong>
                        </div>
                        <div className="lead desc">{`${edu.start}-${edu.end}`}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
