import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  Select,
  MenuItem,
  Link,
  Modal,
  IconButton,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import CloseIcon from "@mui/icons-material/Close";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const registerSchema = yup.object().shape({
  firstName: yup.string().required("First Name Required"),
  lastName: yup.string().required("Last Name Required"),
  email: yup
  .string()
  .email("Invalid Email")
  .required("Email Required")
  .matches(/^[^\s@]+@ciit\.edu\.ph$/i, "Invalid School Email"),
  password: yup.string().required("Password Required"),
  location: yup.string().required("Course Required"),
  picture: yup.string().required("Please upload a profile picture"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email Required"),
  password: yup.string().required("Password Required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "https://ciit-plusplus-backend.onrender.com/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
      toast.success("Sign Up Successful, Please Login", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("https://ciit-plusplus-backend.onrender.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      const { firstName } = loggedIn.user;
      toast.success(`Welcome back, ${firstName}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    } 
  };
  

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const handleTermsClick = () => {
    setIsTermsModalOpen(true);
  };

  const handleTermsClose = () => {
    setIsTermsModalOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4"},
            }}
          >
            {isRegister && (
              <>
                <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <Box sx={{ gridColumn: "span 4" }}>
                  <Typography mb="0.5rem" sx={{ textDecoration: "underline" }}>
                    Select Your Course/Major
                  </Typography>
                  <Select
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.location) && Boolean(errors.location)}
                    helperText={touched.location && errors.location}
                    sx={{ width: "100%", gridColumn: "span 4" }}     
                  >
                    <MenuItem value="BS Computer Science">BS Computer Science</MenuItem>
                    <MenuItem value="BA Multimedia Arts">BA Multimedia Arts</MenuItem>
                    <MenuItem value="BS Entrepreneurship">BS Entrepreneurship</MenuItem>
                    <MenuItem value="BS Entertainment and Multimedia Computing">BS Entertainment and Multimedia Computing</MenuItem>
                    <MenuItem value="BS Information Systems">BS Information Systems</MenuItem>
                  </Select>
                </Box>

                <Box
                  gridColumn="span 4"
                  border={`1px solid ${palette.primary.main}`}
                  borderRadius="5px"
                  p="1rem"
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border={`1px dashed ${palette.primary.main}`}
                        p="1rem"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <Typography sx={{ textAlign: "center"}}>Drop your picture here or click to upload</Typography>
                        ) : (
                          <FlexBetween>
                            <Typography>{values.picture.name}</Typography>
                            <EditOutlinedIcon />
                          </FlexBetween>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
              </>
            )}

            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                textAlign: "center",
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </Typography>
            <br/>
            <Typography gutterBottom align="center" variant="body2">
              {isLogin
                ? "By Logging in, you agree to our "
                : "By Signing Up, you agree to our "}
              <Link href="#" onClick={handleTermsClick}>Terms and Privacy Policy.</Link>
            </Typography>
            <Modal
              open={isTermsModalOpen}
              onClose={handleTermsClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: isNonMobile ? 800 : '90vw',
                  maxWidth: '90vw',
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  borderRadius: "2rem",
                  boxShadow: 24,
                  p: 4,
                  maxHeight: '90vh',
                  overflow: 'auto'
                }}>
                  <IconButton sx={{ position: 'absolute', top: 0, right: 0, color: 'primary.main',}} onClick={handleTermsClose}>
                    <CloseIcon />
                  </IconButton>
                <Typography align="center" id="modal-modal-title" variant="h6" component="h2">
                  Welcome to CIIT++! <br></br> By accessing or using our platform, you agree to the following terms and conditions:
                </Typography>
                <Typography gutterBottom align="left" variant="body2" id="modal-modal-description" sx={{ mt: 2 }}>
                  1. User Accounts: To access certain features of our platform, you may need to create a user account. When creating an account, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account.
                  <br/><br/>
                  2. Content: Our platform includes various features, including an exclusive social network and school information/service hubs, where you can post, upload, or share content. You are solely responsible for any content that you post, upload, or share on our platform. By posting, uploading, or sharing content, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise exploit in any manner such content in all formats and distribution channels now known or hereafter devised.
                  <br/><br/>
                  3. Prohibited Conduct: You agree not to use our platform for any unlawful or prohibited purpose or to engage in any conduct that could damage, disable, or impair the operation of our platform. Prohibited conduct includes, but is not limited to, the following: posting, uploading, or sharing any content that is defamatory, obscene, pornographic, or otherwise objectionable; using our platform to harass, stalk, or threaten others; using our platform to engage in any activity that violates the intellectual property rights of others.
                  <br/><br/>
                  4. Privacy: We take the privacy of our users seriously. Please review our Privacy Policy to learn more about how we collect, use, and disclose information about our users.
                  <br/><br/>
                  5. Modifications: We reserve the right to modify or update these terms and conditions at any time without prior notice. Your continued use of our platform after such modifications will constitute your agreement to the updated terms and conditions.
                  <br/><br/>
                  6. Termination: We reserve the right to terminate your access to our platform at any time and for any reason, without liability to you.
                  <br/><br/>
                  If you have any questions or concerns about these terms and conditions, please contact us at ciitplusplus@gmail.com.
                </Typography>
              </Box>
            </Modal>



          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;