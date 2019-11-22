-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2019 at 05:53 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `pemesanan`
--

CREATE TABLE `pemesanan` (
  `orderID` int(11) NOT NULL,
  `nama_customer` varchar(255) NOT NULL,
  `Paket1` varchar(255) DEFAULT NULL,
  `Paket2` varchar(255) DEFAULT NULL,
  `Paket3` varchar(255) DEFAULT NULL,
  `total_harga` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pemesanan`
--

INSERT INTO `pemesanan` (`orderID`, `nama_customer`, `Paket1`, `Paket2`, `Paket3`, `total_harga`) VALUES
(1, 'undefined', 'null', 'null', 'null', '0'),
(2, 'undefined', 'null', 'null', 'null', '0'),
(3, 'vincent', 'null', 'null', 'null', '0'),
(4, 'undefined', 'null', 'null', 'null', '0'),
(5, 'undefined', 'null', 'null', 'null', '0'),
(6, 'undefined', 'null', 'null', 'null', '0'),
(7, 'vincent', 'null', 'null', 'null', '0'),
(8, 'vincent', 'Pilihan A', 'Pilihan A', 'Pilihan A', '75000'),
(9, 'sultan', 'Pilihan C', 'Pilihan B', 'Pilihan A', '105000'),
(10, 'sultan', 'Pilihan C', 'Pilihan B', 'Pilihan A', '105000'),
(11, 'andre', 'Pilihan C', 'Pilihan B', 'Pilihan A', '105000'),
(12, '', 'null', 'null', 'null', '0'),
(13, '', 'null', 'null', 'null', '0'),
(14, '', 'null', 'null', 'null', '0'),
(15, '', 'null', 'null', 'null', '0'),
(16, 'BABANG', 'Pilihan B', 'Pilihan C', 'Pilihan A', '93000'),
(17, 'ALFIN', 'Pilihan B', 'Pilihan F', 'Pilihan A', '93000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pemesanan`
--
ALTER TABLE `pemesanan`
  ADD PRIMARY KEY (`orderID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pemesanan`
--
ALTER TABLE `pemesanan`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
