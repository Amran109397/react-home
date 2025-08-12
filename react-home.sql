-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2025 at 09:29 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react-home`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Web Development', NULL, NULL),
(2, 'Web Design', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `remember_token` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `contact_no`, `email`, `password`, `status`, `remember_token`, `image`) VALUES
(1, 'kamal', '015', 'kamal@yahoo.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, '70351754797472689479', NULL),
(2, 'Ibrahim khalil', '016', 'jamal@gmail.com', '356a192b7913b04c54574d18c28d46e6395428ab', 1, NULL, NULL),
(3, 'Ibrahim khalil', '015', 'ether_sb@yahoo.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1, NULL, NULL),
(5, 'Computer', '015', 'jamal@gmail.com', '356a192b7913b04c54574d18c28d46e6395428ab', 1, NULL, NULL),
(6, 'kamal', '0156669998', 'ether_sb@yahoo.com', '356a192b7913b04c54574d18c28d46e6395428ab', 1, NULL, 'abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg'),
(7, 'Laptop Computer', '0156669998', 'mdakash906431@gmail.com', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 1, NULL, 'abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg'),
(8, 'My Bank', '0156669998', 'kamal@yahoo.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1, NULL, '../users_file/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg'),
(9, 'Laptop Computer', '0156669998', 'mdakash906431@gmail.com', '9adcb29710e807607b683f62e555c22dc5659713', 1, NULL, 'users_file/665055681abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
