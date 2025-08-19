-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2025 at 09:13 AM
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
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Apple', '2025-08-11 04:30:11', '2025-08-11 04:30:11'),
(2, 'Asuss', '2025-08-11 04:30:25', '2025-08-11 04:30:25');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Frozen Fishs', '2025-08-11 04:26:37', '2025-08-11 04:26:37'),
(2, 'Dried Fish', '2025-08-11 04:26:54', '2025-08-11 04:26:54');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Dhaka', '2025-08-13 04:12:28', '2025-08-13 04:12:28'),
(2, 'Chattogram', '2025-08-13 04:12:28', '2025-08-13 04:12:28');

-- --------------------------------------------------------

--
-- Table structure for table `colours`
--

CREATE TABLE `colours` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `colours`
--

INSERT INTO `colours` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Black', '2025-08-11 04:33:39', '2025-08-11 04:33:39');

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE `coupon` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `amount` double(10,2) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `finish_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coupon`
--

INSERT INTO `coupon` (`id`, `name`, `code`, `amount`, `start_date`, `finish_date`) VALUES
(1, 'kamal', 'WATER', 20.00, '2025-08-01', '2025-08-31');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_contact` varchar(255) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `billing_address` text DEFAULT NULL,
  `billing_city` int(11) DEFAULT NULL,
  `shipping_address` text DEFAULT NULL,
  `shipping_city` int(11) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `sub_total` double(10,2) DEFAULT NULL,
  `discount` double(10,2) DEFAULT NULL,
  `grand_total` double(10,2) DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `order_status` int(11) DEFAULT 0 COMMENT '0 pending 1 accepted 2 delivered 3 canceled',
  `cart_details` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `customer_contact`, `customer_email`, `billing_address`, `billing_city`, `shipping_address`, `shipping_city`, `order_date`, `sub_total`, `discount`, `grand_total`, `delivery_date`, `order_status`, `cart_details`, `created_at`, `updated_at`) VALUES
(1, 'Ibrahim khalil', '22', 'kamal@yahoo.com', 'asdfasdf', 2, '2no Gate', 1, '2025-08-13', 55000.00, 11000.00, 44000.00, '2025-08-14', 2, '[{\"id\":\"2\",\"name\":\"Faded SkyBlu Denim Jeans\",\"short_description\":\"City-inspired fashion for the modern man and woman.\",\"long_description\":\"Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\",\"price\":\"5000.00\",\"discount\":\"5.00\",\"specification\":\"Width\\r\\n128mm\\r\\nHeight\\r\\n508mm\\r\\nDepth\\r\\n85mm\\r\\nWeight\\r\\n52gm\\r\\nQuality checking\\r\\nyes\\r\\nFreshness Duration\\r\\n03days\\r\\nWhen packeting\\r\\nWithout touch of hand\\r\\nEach Box contains\\r\\n60pcs\\r\\n\",\"category_id\":\"1\",\"brand_id\":\"2\",\"image\":\"products_file/1540177334s-product-1.jpg\",\"bname\":\"Asuss\",\"cname\":\"Men\'s Clothing\",\"quantity\":1,\"itemTotal\":5000,\"title\":\"Search Engine Optimization\",\"description\":\"Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and\\r\\n\\r\\nIt is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less\",\"duration\":\"1.5 month\",\"created_at\":\"2025-08-11 11:22:04\",\"updated_at\":\"2025-08-11 11:22:04\",\"cat_name\":\"Frozen Fishs\",\"colour_id\":\"1\",\"is_featured\":\"1\",\"is_inspired\":\"1\",\"col_name\":\"Black\"},{\"id\":\"1\",\"name\":\"Computer\",\"short_description\":\"A T-shirt with long sleeves, suitable for cooler weather or as a layering piece.\",\"long_description\":\"Phasellus posuere ac justo id suscipit. Vestibulum venenatis ipsum sed nulla bibendum vestibulum. Etiam pellentesque quis sapien eget semper. Aliquam nisl felis, feugiat vel velit sollicitudin, dictum euismod erat. Vestibulum quis eros nunc. Phasellus faucibus arcu sit amet velit vehicula, non tempor mauris faucibus. Fusce metus nisl, interdum ornare est eget, volutpat luctus metus. Praesent egestas blandit bibendum. Phasellus efficitur ipsum nec tristique iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\",\"price\":\"50000.00\",\"discount\":\"5.00\",\"specification\":\"sadfkjsdj\",\"category_id\":\"1\",\"brand_id\":\"2\",\"image\":\"products_file/1469555492cart-1.jpg\",\"bname\":\"Asuss\",\"cname\":\"Women\'s Clothing\",\"quantity\":1,\"itemTotal\":50000,\"title\":\"Website Design\",\"description\":\"kfsdnvsakdf\",\"duration\":\"1 Month\",\"created_at\":\"2025-08-11 11:19:44\",\"updated_at\":\"2025-08-11 11:19:44\",\"cat_name\":\"Frozen Fishs\",\"colour_id\":\"1\",\"is_featured\":\"1\",\"is_inspired\":\"1\",\"col_name\":\"Black\"}]', '2025-08-13 05:08:42', '2025-08-13 05:08:42'),
(5, 'AMRAN', '01268554555', 'amran@gmail.com', 'Chattogram', 2, 'Chattogram', 2, '2025-08-19', 150.00, 30.00, 120.00, NULL, 0, '[{\"id\":\"3\",\"name\":\"Mineral Water Bottle\",\"description\":\"wfwsfgsgfewsg\",\"price\":\"150.00\",\"discount\":\"40.00\",\"category_id\":\"1\",\"brand_id\":\"1\",\"colour_id\":\"1\",\"is_featured\":\"1\",\"is_inspired\":\"1\",\"specification\":\"eggyt4eer\",\"image\":\"products_file/1768484443product-1.png\",\"created_at\":\"2025-08-19 09:33:11\",\"updated_at\":\"2025-08-19 09:33:11\",\"bname\":\"Apple\",\"cat_name\":\"Frozen Fishs\",\"col_name\":\"Black\",\"quantity\":1,\"itemTotal\":150}]', '2025-08-19 03:36:21', '2025-08-19 03:36:21'),
(6, 'AMRAN', '01268554555', 'amran@gmail.com', 'Chattogram', 2, 'Chattogram', 2, '2025-08-19', 50.00, 10.00, 40.00, NULL, 0, '[{\"id\":\"1\",\"name\":\"Mineral Water Bottle\",\"description\":\"kfsdnvsakdf\",\"price\":\"50.00\",\"discount\":\"10.00\",\"category_id\":\"1\",\"brand_id\":\"2\",\"colour_id\":\"1\",\"is_featured\":\"1\",\"is_inspired\":\"1\",\"specification\":\"sadfkjsdj\",\"image\":\"products_file/317422105product-3.png\",\"created_at\":\"2025-08-11 11:19:44\",\"updated_at\":\"2025-08-11 11:19:44\",\"bname\":\"Asuss\",\"cat_name\":\"Frozen Fishs\",\"col_name\":\"Black\",\"quantity\":1,\"itemTotal\":50}]', '2025-08-19 04:01:17', '2025-08-19 04:01:17'),
(7, 'AMRAN', '01268554555', 'amran@gmail.com', 'Chattogram', 2, 'Chattogram', 2, '2025-08-19', 150.00, 30.00, 120.00, NULL, 0, '[{\"id\":\"3\",\"name\":\"Mineral Water Bottle\",\"description\":\"wfwsfgsgfewsg\",\"price\":\"150.00\",\"discount\":\"40.00\",\"category_id\":\"1\",\"brand_id\":\"1\",\"colour_id\":\"1\",\"is_featured\":\"1\",\"is_inspired\":\"1\",\"specification\":\"eggyt4eer\",\"image\":\"products_file/1768484443product-1.png\",\"created_at\":\"2025-08-19 09:33:11\",\"updated_at\":\"2025-08-19 09:33:11\",\"bname\":\"Apple\",\"cat_name\":\"Frozen Fishs\",\"col_name\":\"Black\",\"quantity\":1,\"itemTotal\":150}]', '2025-08-19 04:28:23', '2025-08-19 04:28:23'),
(8, 'AMRAN', '01268554555', 'amran@gmail.com', 'Chattogram', 2, 'Chattogram', 2, '2025-08-19', 150.00, 0.00, 150.00, NULL, 0, '[{\"id\":\"3\",\"name\":\"Mineral Water Bottle\",\"description\":\"wfwsfgsgfewsg\",\"price\":\"150.00\",\"discount\":\"40.00\",\"category_id\":\"1\",\"brand_id\":\"1\",\"colour_id\":\"1\",\"is_featured\":\"1\",\"is_inspired\":\"1\",\"specification\":\"eggyt4eer\",\"image\":\"products_file/1768484443product-1.png\",\"created_at\":\"2025-08-19 09:33:11\",\"updated_at\":\"2025-08-19 09:33:11\",\"bname\":\"Apple\",\"cat_name\":\"Frozen Fishs\",\"col_name\":\"Black\",\"quantity\":1,\"itemTotal\":150}]', '2025-08-19 06:20:53', '2025-08-19 06:20:53'),
(9, 'AMRAN', '01268554555', 'amran@gmail.com', 'Chattogram', 2, 'Chattogram', 2, '2025-08-19', 50.00, 0.00, 50.00, NULL, 0, '[{\"id\":\"1\",\"name\":\"Mineral Water Bottle\",\"description\":\"kfsdnvsakdf\",\"price\":\"50.00\",\"discount\":\"10.00\",\"category_id\":\"1\",\"brand_id\":\"2\",\"colour_id\":\"1\",\"is_featured\":\"1\",\"is_inspired\":\"1\",\"specification\":\"sadfkjsdj\",\"image\":\"products_file/317422105product-3.png\",\"created_at\":\"2025-08-11 11:19:44\",\"updated_at\":\"2025-08-11 11:19:44\",\"bname\":\"Asuss\",\"cat_name\":\"Frozen Fishs\",\"col_name\":\"Black\",\"quantity\":1,\"itemTotal\":50}]', '2025-08-19 06:32:51', '2025-08-19 06:32:51'),
(10, 'AMRAN', '01268554555', 'amran@gmail.com', 'Chattogram', 2, 'Chattogram', 2, '2025-08-19', 100.00, 20.00, 80.00, NULL, 0, '[{\"id\":\"2\",\"name\":\"Mineral Water Bottle\",\"description\":\"hgdghwetgew\",\"price\":\"100.00\",\"discount\":\"20.00\",\"category_id\":\"1\",\"brand_id\":\"2\",\"colour_id\":\"1\",\"is_featured\":\"1\",\"is_inspired\":\"1\",\"specification\":\"gssdgsv\",\"image\":\"products_file/668971542product-2.png\",\"created_at\":\"2025-08-11 11:22:04\",\"updated_at\":\"2025-08-11 11:22:04\",\"bname\":\"Asuss\",\"cat_name\":\"Frozen Fishs\",\"col_name\":\"Black\",\"quantity\":1,\"itemTotal\":100}]', '2025-08-19 06:47:23', '2025-08-19 06:47:23'),
(11, 'AMRAN', '01268554555', 'amran@gmail.com', 'Chattogram', 2, 'Chattogram', 2, '2025-08-19', 150.00, 0.00, 150.00, NULL, 0, '[{\"id\":\"3\",\"name\":\"Mineral Water Bottle\",\"description\":\"wfwsfgsgfewsg\",\"price\":\"150.00\",\"discount\":\"40.00\",\"category_id\":\"1\",\"brand_id\":\"1\",\"colour_id\":\"1\",\"is_featured\":\"1\",\"is_inspired\":\"1\",\"specification\":\"eggyt4eer\",\"image\":\"products_file/1768484443product-1.png\",\"created_at\":\"2025-08-19 09:33:11\",\"updated_at\":\"2025-08-19 09:33:11\",\"bname\":\"Apple\",\"cat_name\":\"Frozen Fishs\",\"col_name\":\"Black\",\"quantity\":1,\"itemTotal\":150}]', '2025-08-19 06:48:42', '2025-08-19 06:48:42'),
(12, 'AMRAN', '01268554555', 'amran@gmail.com', 'Chattogram', 2, 'Chattogram', 2, '2025-08-19', 50.00, 0.00, 50.00, NULL, 0, '[{\"id\":\"1\",\"name\":\"Mineral Water Bottle\",\"description\":\"kfsdnvsakdf\",\"price\":\"50.00\",\"discount\":\"10.00\",\"category_id\":\"1\",\"brand_id\":\"2\",\"colour_id\":\"1\",\"is_featured\":\"1\",\"is_inspired\":\"1\",\"specification\":\"sadfkjsdj\",\"image\":\"products_file/317422105product-3.png\",\"created_at\":\"2025-08-11 11:19:44\",\"updated_at\":\"2025-08-11 11:19:44\",\"bname\":\"Asuss\",\"cat_name\":\"Frozen Fishs\",\"col_name\":\"Black\",\"quantity\":1,\"itemTotal\":50}]', '2025-08-19 06:54:01', '2025-08-19 06:54:01');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `discount` double(10,2) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `colour_id` int(11) NOT NULL,
  `is_featured` int(11) DEFAULT 0,
  `is_inspired` int(11) DEFAULT 0,
  `specification` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `category_id`, `brand_id`, `colour_id`, `is_featured`, `is_inspired`, `specification`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Mineral Water Bottle', 'kfsdnvsakdf', 50.00, 10.00, 1, 2, 1, 1, 1, 'sadfkjsdj', 'products_file/317422105product-3.png', '2025-08-11 05:19:44', '2025-08-11 05:19:44'),
(2, 'Mineral Water Bottle', 'hgdghwetgew', 100.00, 20.00, 1, 2, 1, 1, 1, 'gssdgsv', 'products_file/668971542product-2.png', '2025-08-11 05:22:04', '2025-08-11 05:22:04'),
(3, 'Mineral Water Bottle', 'wfwsfgsgfewsg', 150.00, 40.00, 1, 1, 1, 1, 1, 'eggyt4eer', 'products_file/1768484443product-1.png', '2025-08-19 03:33:11', '2025-08-19 03:33:11');

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
(1, 'kamal', '015', 'kamal@yahoo.com', '356a192b7913b04c54574d18c28d46e6395428ab', 1, '59031755056467205374', 'users_file/1585143457testimonials-1.jpg'),
(2, 'amran', '012545', 'amran@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 1, '90271755574085679264', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colours`
--
ALTER TABLE `colours`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
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
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `colours`
--
ALTER TABLE `colours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coupon`
--
ALTER TABLE `coupon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
