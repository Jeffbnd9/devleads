"use client";

import * as React from "react";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";

interface Props {
  window?: () => Window;
}

const drawerWidth = 200;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Projets", path: "/Projets" },
  { label: "Contact", path: "/Contact" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // --- Drawer (mobile) ---
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Image
          src="/logo_devleads_transparent.png"
          alt="Logo DevLeads - Développement Web"
          width={120}
          height={40}
          style={{ objectFit: "contain", margin: "0 auto", height: "auto" }}
          priority
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ px: 1.5 }}>
            {/* RENDRE DIRECTEMENT LE BOUTON EN LIEN */}
            <ListItemButton
              component={NextLink}
              href={item.path}
              sx={{
                textAlign: "center",
                my: 1.2,
                borderRadius: "12px",
                background: "#31343a",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: 1.5,
                textDecoration: "none",
                boxShadow:
                  "0 0 14px #7be8ff55, 2px 2px 9px #23252c, -2px -2px 8px #484c56",
                border: "2px solid #23252c",
                outline: "none",
                transition: "transform 0.14s, box-shadow 0.15s",
                position: "relative",
                overflow: "visible",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow:
                    "0 0 20px #8cf3ffcc, 3px 3px 10px #23252c, -3px -3px 8px #484c56",
                  color: "#fff",
                },
              }}
            >
              <span
                className="nav-glossy-mobile"
                style={{
                  pointerEvents: "none",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  opacity: 0,
                  transition: "opacity 0.18s",
                  zIndex: 1,
                  background:
                    "linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.18) 48%, rgba(150,235,255,0.14) 62%, transparent 70%)",
                }}
              />
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // Petit helper d'effet glossy au hover (mobile)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const style = document.createElement("style");
    style.innerHTML = `
      .MuiListItemButton-root:hover .nav-glossy-mobile,
      .MuiListItemButton-root:focus .nav-glossy-mobile {
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#232323",
          marginTop: "15px",
          borderRadius: "16px",
          width: "90%",
          maxWidth: "1600px",
          left: "50%",
          transform: "translateX(-50%)",
          border: "2px solid #23252c",
          boxShadow: `
            4px 4px 16px #23252c,
            -4px -4px 12px #484c56,
            0 1px 0px #16171b
          `,
        }}
        elevation={0}
      >
        <Toolbar>
          {/* Burger mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO desktop (cliquable) */}
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor: "white",
              padding: "4px 12px",
              borderRadius: "12px",
              maxWidth: "160px",
              mr: "auto",
              transition: "transform 0.18s cubic-bezier(.7,1.5,.6,1.2)",
              "&:hover": {
                transform: "scale(1.12)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              },
              cursor: "pointer",
              lineHeight: 0, // pour éviter un <a> plus grand que l'image
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo_devleads_transparent.png"
              alt="Logo DevLeads - Développement Web"
              width={120}
              height={40}
              style={{ width: "auto" }}  
              priority
            />
          </Box>

          {/* NAV ITEMS desktop */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, mr: "50px", gap: 4 }}>
            {navItems.map((item) => (
              <Box
                key={item.label}
                component={NextLink}
                href={item.path}
                sx={{
                  display: "inline-block",
                  position: "relative",
                  px: "14px",
                  py: "6px",
                  minWidth: "64px",
                  borderRadius: "10px",
                  background: "#31343a",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: 1.3,
                  textDecoration: "none",
                  boxShadow:
                    "0 0 18px #7be8ff55, 4px 4px 16px #23252c, -4px -4px 12px #484c56",
                  border: "1px solid #23252c",
                  outline: "none",
                  transition: "transform 0.14s, box-shadow 0.15s",
                  "&:hover": {
                    transform: "scale(1.06)",
                    boxShadow:
                      "0 0 28px #8cf3ffcc, 4px 4px 18px #23252c, -4px -4px 12px #484c56",
                  },
                  cursor: "pointer",
                  overflow: "visible",
                }}
              >
                {item.label}
                {/* liseré glossy */}
                <Box
                  sx={{
                    pointerEvents: "none",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    opacity: 0,
                    transition: "opacity 0.18s",
                    zIndex: 1,
                    background:
                      "linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.18) 48%, rgba(150,235,255,0.14) 62%, transparent 70%)",
                    ".MuiBox-root:hover &": { opacity: 1 },
                    ".MuiBox-root:focus-visible &": { opacity: 1 },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer mobile */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}