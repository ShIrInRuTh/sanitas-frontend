// HomePage.tsx

import React from "react";
import { Box, Typography, IconButton, Avatar, Button } from "@mui/material";
// import Grid from "@mui/material/Grid";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
// import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PersonIcon from "@mui/icons-material/Person";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

// const DatePagination: React.FC<DatePaginationProps> = ({
//   selectedDate,
//   onDateChange,
// }) => {
//   const handlePrev = () => {
//     const prev = new Date(selectedDate);
//     prev.setDate(selectedDate.getDate() - 1);
//     onDateChange(prev);
//   };

//   const handleNext = () => {
//     const next = new Date(selectedDate);
//     next.setDate(selectedDate.getDate() + 1);
//     onDateChange(next);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         p: 2,
//       }}
//     >
//       <IconButton onClick={handlePrev}>
//         <ChevronLeftIcon />
//       </IconButton>
//       <Typography
//         sx={{
//           mx: 2,
//           fontSize: 18,
//           fontWeight: 500,
//           minWidth: 220,
//           textAlign: "center",
//         }}
//       >
//         {formatDisplayDate(selectedDate)}
//       </Typography>
//       <IconButton onClick={handleNext}>
//         <ChevronRightIcon />
//       </IconButton>
//     </Box>
//   );
// };

// --
// const remindersToday = [
//   {
//     date: today,
//     time: "4pm",
//     name: "Paracetamol 50mg 4 pills",
//     taken: true,
//     icon: <PersonIcon color="disabled" />,
//   },
//   {
//     date: today,
//     time: "After dinner",
//     name: "Mixtard 100iu/ml Injection 1 dose",
//     taken: false,
//     icon: <PersonIcon color="success" />,
//   },
// ];

// const remindersTomorrow = [
//   {
//     date: tomorrow,
//     time: "12am",
//     name: "Furosemide 1% 20mg/5ml 20ml",
//     taken: false,
//     icon: <PersonIcon color="primary" />,
//   },
//   {
//     date: tomorrow,
//     time: "12am",
//     name: "Furosemide 1% 20mg/5ml 20ml",
//     taken: false,
//     icon: <PersonIcon color="primary" />,
//   },
//   {
//     date: tomorrow,
//     time: "12am",
//     name: "Furosemide 1% 20mg/5ml 20ml",
//     taken: false,
//     icon: <PersonIcon color="primary" />,
//   },
// ];

// const cardItems = [
//   { label: "My Medicine Cabinet" },
//   {
//     label: "Medicine expiring",
//     icon: <WarningAmberIcon color="error" sx={{ fontSize: 32 }} />,
//   },
//   { label: "Consultations" },
//   { label: "Doctors" },
// ];

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{ bgcolor: "#fafafa", minHeight: "100vh", fontFamily: "sans-serif" }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 3,
          py: 2,
          borderBottom: "1px solid #eee",
        }}
      >
        <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
          <img
            src="img/sanitas-logo.png"
            alt="Sanitas Logo"
            style={{ width: 120, height: 36, marginRight: 12 }}
          />
          {/* <Typography variant="h5" sx={{ color: "#b000e6", fontWeight: 700 }}>
            Sanitas
          </Typography> */}
        </Box>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton>
          <Avatar sx={{ width: 32, height: 32, bgcolor: "#eee" }}>
            <PersonIcon color="action" />
          </Avatar>
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        {/* Notifications */}
        <Card sx={{ width: 600, ml: 2, mt: 2, boxShadow: 3 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography variant="h6" sx={{ mr: 1 }}>
                Today
              </Typography>
              <IconButton size="small">
                <CalendarTodayIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="textSecondary">
              You have no new notifications.
            </Typography>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            p: 2,
          }}
        >
          {/* Medicine cabinet */}
          <Card sx={{ maxWidth: 400, height: 150, mr: 2, mt: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">My Medicine Cabinet</Typography>
              <Typography variant="body2" color="textSecondary">
                Manage your medicines and track your health.
              </Typography>
            </CardContent>
          </Card>

          {/* Medicine expiring */}
          <Card sx={{ maxWidth: 400, height: 150, mr: 1, mt: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Medicine Expiring</Typography>
              <Typography variant="body2" color="textSecondary">
                You have no medicines expiring soon.
              </Typography>
            </CardContent>
          </Card>

          {/* Consultations */}
          <Card sx={{ maxWidth: 400, height: 150, mr: 2, mt: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Consultations</Typography>
              <Typography variant="body2" color="textSecondary">
                You have no upcoming consultations.
              </Typography>
            </CardContent>
          </Card>

          {/* Doctors */}
          <Card sx={{ maxWidth: 400, height: 150, mr: 1, mt: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Doctors</Typography>
              <Typography variant="body2" color="textSecondary">
                Look for teleconsultations options here.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Chatbot Button */}
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          bottom: "50px",
          right: "20px",
          zIndex: 1000,
          marginLeft: "auto",
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#fff",
            color: "#b000e6",
            borderRadius: "50%",
            minWidth: 64,
            minHeight: 64,
            boxShadow: 3,
            p: 0,
          }}
        >
          <ChatBubbleOutlineIcon sx={{ fontSize: 32 }} />
        </Button>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            color: "#888",
            mt: 0.5,
          }}
        ></Typography>
      </Box>

      {/* Footer with Wavy SVG */}
      <Box sx={{ position: "relative", mt: 8 }}>
        <Box sx={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: 60 }}
          >
            <path
              d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
              fill="#b000e6"
              opacity="0.08"
            />
          </svg>
        </Box>
        <Box
          sx={{
            bgcolor: "#fff",
            px: 4,
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 15,
            color: "#888",
            borderTop: "1px solid #eee",
          }}
        >
          <Box>
            <b>Contact:</b> help@sanitas.com | <b>Helpline:</b> 1800-000-0000
          </Box>
          <Box sx={{ mt: { xs: 1, md: 0 } }}>
            <Button variant="text" size="small" sx={{ color: "#b000e6" }}>
              About
            </Button>
            <Button variant="text" size="small" sx={{ color: "#b000e6" }}>
              FAQ
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
