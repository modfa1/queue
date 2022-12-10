-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 10, 2022 at 06:57 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `queue`
--

-- --------------------------------------------------------

--
-- Table structure for table `queuedata`
--

CREATE TABLE `queuedata` (
  `id` int(11) NOT NULL,
  `shop` varchar(1) NOT NULL,
  `no` int(11) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'waiting'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `queuedatab`
--

CREATE TABLE `queuedatab` (
  `id` int(11) NOT NULL,
  `shop` varchar(1) NOT NULL,
  `no` int(11) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'waiting'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `queuedatac`
--

CREATE TABLE `queuedatac` (
  `id` int(11) NOT NULL,
  `shop` varchar(1) NOT NULL,
  `no` int(11) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'waiting'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `queuedatad`
--

CREATE TABLE `queuedatad` (
  `id` int(11) NOT NULL,
  `shop` varchar(1) NOT NULL,
  `no` int(11) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'waiting'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `queuedatae`
--

CREATE TABLE `queuedatae` (
  `id` int(11) NOT NULL,
  `shop` varchar(1) NOT NULL,
  `no` int(11) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'waiting'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `queuedataf`
--

CREATE TABLE `queuedataf` (
  `id` int(11) NOT NULL,
  `shop` varchar(1) NOT NULL,
  `no` int(11) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'waiting'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `iduser` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `queuedata`
--
ALTER TABLE `queuedata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queuedatab`
--
ALTER TABLE `queuedatab`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queuedatac`
--
ALTER TABLE `queuedatac`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queuedatad`
--
ALTER TABLE `queuedatad`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queuedatae`
--
ALTER TABLE `queuedatae`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queuedataf`
--
ALTER TABLE `queuedataf`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `queuedata`
--
ALTER TABLE `queuedata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `queuedatab`
--
ALTER TABLE `queuedatab`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `queuedatac`
--
ALTER TABLE `queuedatac`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `queuedatad`
--
ALTER TABLE `queuedatad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `queuedatae`
--
ALTER TABLE `queuedatae`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `queuedataf`
--
ALTER TABLE `queuedataf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
