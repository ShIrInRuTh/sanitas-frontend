"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { Background } from "@/styles/pages/Login";

const steps = ["Personal Info", "Medical Info", "Review"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    weight: "",
    height: "",
    bloodType: "",
    allergies: "",
    medicalHistory: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    const newErrors: any = {};
    if (activeStep === 0) {
      if (!formData.firstName) newErrors.firstName = "Required";
      if (!formData.lastName) newErrors.lastName = "Required";
      if (!formData.dob) newErrors.dob = "Required";
    } else if (activeStep === 1) {
      if (!formData.weight) newErrors.weight = "Required";
      if (!formData.height) newErrors.height = "Required";
      if (!formData.bloodType) newErrors.bloodType = "Required";
      if (!formData.allergies) newErrors.allergies = "Required";
      if (!formData.medicalHistory) newErrors.medicalHistory = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Background bg="/login-bg.png">
      <Box sx={{ mx: "auto", mt: 4, maxWidth: 500, width: "100%", px: 2 }}>
        <Card elevation={4} sx={{ borderRadius: 3, p: 3 }}>
          <Box textAlign="center" mb={3}>
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: "150px", height: "50px" }}
            />
          </Box>
          <CardContent>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                mb: 4,
                "& .MuiStepIcon-root": { color: "#e1bee7" },
                "& .MuiStepIcon-root.Mui-active": { color: "#9c27b0" },
                "& .MuiStepIcon-root.Mui-completed": { color: "#7b1fa2" },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && (
              <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  fullWidth
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  fullWidth
                />
                <TextField
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  error={!!errors.dob}
                  helperText={errors.dob}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>
            )}

            {activeStep === 1 && (
              <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                <TextField
                  label="Weight (kg)"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  error={!!errors.weight}
                  helperText={errors.weight}
                  fullWidth
                />
                <TextField
                  label="Height (cm)"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  error={!!errors.height}
                  helperText={errors.height}
                  fullWidth
                />
                <TextField
                  label="Blood Type"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  error={!!errors.bloodType}
                  helperText={errors.bloodType}
                  fullWidth
                />
                <TextField
                  label="Allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  error={!!errors.allergies}
                  helperText={errors.allergies}
                  fullWidth
                />
                <TextField
                  label="Medical History"
                  name="medicalHistory"
                  multiline
                  minRows={3}
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  error={!!errors.medicalHistory}
                  helperText={errors.medicalHistory}
                  fullWidth
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>
            )}

            {activeStep === 2 && (
              <Box sx={{ color: "#444", lineHeight: 1.8 }}>
                <Typography>
                  <strong>First Name:</strong> {formData.firstName}
                </Typography>
                <Typography>
                  <strong>Last Name:</strong> {formData.lastName}
                </Typography>
                <Typography>
                  <strong>Date of Birth:</strong> {formData.dob}
                </Typography>
                <Typography>
                  <strong>Weight:</strong> {formData.weight} kg
                </Typography>
                <Typography>
                  <strong>Height:</strong> {formData.height} cm
                </Typography>
                <Typography>
                  <strong>Blood Type:</strong> {formData.bloodType}
                </Typography>
                <Typography>
                  <strong>Allergies:</strong> {formData.allergies}
                </Typography>
                <Typography>
                  <strong>Medical History:</strong> {formData.medicalHistory}
                </Typography>
              </Box>
            )}

            <Box mt={4} display="flex" justifyContent="space-between">
              <Button
                onClick={handleBack}
                sx={{
                  mt: 3,
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: "1rem",
                  borderRadius: 2,
                  color: "#9c27b0",
                  border: "1px solid #ce93d8",
                  "&:hover": {
                    backgroundColor: "#f3e5f5",
                  },
                }}
              >
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                sx={{
                  mt: 3,
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: "1rem",
                  borderRadius: 2,
                  backgroundColor: "#9c27b0",
                  "&:hover": { backgroundColor: "#7b1fa2" },
                }}
              >
                Next
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Background>
  );
};

export default MultiStepForm;
