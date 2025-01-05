import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context, server } from "../index";
import axios from "axios";
import toast from "react-hot-toast";

function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      toast.success("logged out");
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      toast.error("error");
      setIsAuthenticated(true);
    }
  };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#000000", // Black background
          color: "#ffffff", // White text
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              fontSize: "24px",
              fontWeight: "600",
              textDecoration: "none",
              color: "#ffffff", // White text
            }}
          >
            Vintage Vault
          </Link>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              listStyle: "none",
              padding: "0",
              marginLeft: "16px",
            }}
          >
            <li style={{ margin: "0 8px" }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#ffffff", // White text
                  padding: "8px 16px",
                }}
              >
                Home
              </Link>
            </li>
            <li style={{ margin: "0 8px" }}>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "#ffffff", // White text
                  padding: "8px 16px",
                }}
              >
                About Us
              </Link>
            </li>
            <li style={{ margin: "0 8px" }}>
              <Link
                to="/getmessages"
                style={{
                  textDecoration: "none",
                  color: "#ffffff", // White text
                  padding: "8px 16px",
                }}
              >
                Get Messages
              </Link>
            </li>
          </ul>
        </div>

        <div style={{ display: "flex" }}>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              listStyle: "none",
              padding: "0",
            }}
          >
            <li style={{ margin: "0 8px" }}>
              <Link
                to="/register"
                style={{
                  textDecoration: "none",
                  color: "#ffffff", // White text
                  padding: "8px 16px",
                }}
              >
                Register
              </Link>
            </li>

            {isAuthenticated ? (
              <li style={{ margin: "0 8px" }}>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff", // White text
                    padding: "8px 16px",
                  }}
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <li style={{ margin: "0 8px" }}>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff", // White text
                    padding: "8px 16px",
                  }}
                >
                  Login
                </Link>
              </li>
            )}

            <li style={{ margin: "0 8px" }}>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "#ffffff", // White text
                  padding: "8px 16px",
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Inline media query for responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            nav {
              flex-direction: column;
              align-items: flex-start;
            }
            
            nav ul {
              flex-direction: column;
              width: 100%;
            }

            nav ul li {
              width: 100%;
              text-align: left;
              margin: 4px 0;
            }

            nav div {
              width: 100%;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;
