import { useState, useEffect } from "react";

export function calculateDaysBetween(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  
  // React component to show the number of days since the user joined
  export function DaysSinceJoined() {
    const [days, setDays] = useState(0);
    useEffect(() => {
      const date1 = new Date("2020-01-01");
      const date2 = new Date();
      setDays(calculateDaysBetween(date1, date2));
    }, []);
    return <div>{days}</div>;
  }
  
  // validate email address
  export function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // validate password
  export function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
  }
  
  // validate user login
  export function validateLogin(email, password) {
    return validateEmail(email) && validatePassword(password);
  }
  
  // validate user registration
  export function validateRegistration(email, password, confirmPassword) { 
    return validateEmail(email) && validatePassword(password) && password === confirmPassword;
  }
  
  // check network connection
  export function checkNetworkConnection() {
    return navigator.onLine;
  }
  
  // api for fetching images
  export function fetchImages() {
    return fetch("https://jsonplaceholder.typicode.com/photos").then((response) =>
      response.json()
    );
  }
  
  