import React from "react";
import { Helmet } from "react-helmet";

function Head() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"
      />

      <title>Directory Landing Page</title>

      <link rel="shortcut icon" type="image/icon" href="assets" />

      <link rel="stylesheet" href="./assets/css/font-awesome.min.css" />

      <link rel="stylesheet" href="./assets/css/linearicons.css" />

      <link rel="stylesheet" href="./assets/css/animate.css" />

      <link rel="stylesheet" href="./assets/css/flaticon.css" />

      <link rel="stylesheet" href="./assets/css/slick.css" />
      <link rel="stylesheet" href="./assets/css/slick-theme.css" />

      <link rel="stylesheet" href="./assets/css/bootstrap.min.css" />

      <link rel="stylesheet" href="./assets/css/bootsnav.css" />

      <link rel="stylesheet" href="./assets/css/style.css" />

      <link rel="stylesheet" href="./assets/css/responsive.css" />

      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    </Helmet>
  );
}

export default Head;
