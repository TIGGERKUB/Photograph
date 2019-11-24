-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2019 at 11:47 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `photograph`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `comment_id` int(8) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `photo_id` int(8) NOT NULL,
  `user_id` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `user_id` int(8) NOT NULL,
  `follower_id` int(8) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `following`
--

CREATE TABLE `following` (
  `user_id` int(8) NOT NULL,
  `following_id` int(8) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `group_detail`
--

CREATE TABLE `group_detail` (
  `group_id` int(8) NOT NULL,
  `user_id` int(8) NOT NULL,
  `group_name` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `group_member`
--

CREATE TABLE `group_member` (
  `group_id` int(8) NOT NULL,
  `user_id` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `like_id` int(8) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `photo_id` int(8) NOT NULL,
  `user_id` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE `photo` (
  `photo_id` int(8) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `caption` varchar(255) NOT NULL,
  `group_id` int(8) NOT NULL,
  `user_id` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `report_id` int(8) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(10) NOT NULL,
  `photo_id` int(8) NOT NULL,
  `reporter` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(8) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` text NOT NULL,
  `email` varchar(60) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `gender` varchar(3) NOT NULL,
  `age` int(3) NOT NULL,
  `birthday` date NOT NULL,
  `phone` varchar(10) NOT NULL,
  `profile_pic` varchar(255) NOT NULL,
  `profile_caption` varchar(255) NOT NULL,
  `created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `email`, `first_name`, `last_name`, `gender`, `age`, `birthday`, `phone`, `profile_pic`, `profile_caption`, `created`) VALUES
(4, 'a', '$2a$10$GQGs78x/q9MCkkQKjTAGKutqKeb0Kg.X2gYaIfoqtcpL7IrCy9a5S', '', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-22'),
(5, 'b', '$2a$10$Habxvxn26dIB9m2nE9LwAOkYobIlnbWDDTgcBkDjawrgQiDKi3sUm', '', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-22'),
(6, 'f', '$2a$10$P52eHOexQCTEUbLXmLlyD..KcYe/mhdREfrPB54Fz/swLe9dlxCMS', '', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-22'),
(7, 'q', '$2a$10$O7AgYl9AM1jhNOcS/yOl4eP2uUcjo8n8CDcYtAZOzKFUDpjMOsaXe', 'q@q.q', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-22'),
(9, 'g', '$2a$10$Kf/fJqO8fQV7GV1xZtBx9.gJUIVFdqt667DFOt8wtmYx0VMH5k03e', 'g@g.g', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-22'),
(10, 'k', '$2a$10$Whab.wj777Bn6TPNpZiZz.1yBFYdQLNN2P9wDhJbSY9s.P4ivAU7e', 'k@k.k', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-22'),
(11, 'yy', '$2a$10$qLpTuGvXx5AHy5rKj/NQGuVLlwLYhPmWobWgiXPUPUEG7g9GZTBIe', 'ytt@ttt.com', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(12, 'dxsfgdsgf', '$2a$10$Ixj7yvoWxoPdthWY4sqMzOYyyDdhWwINylOkhnjjpXWIEzfRwFLPC', 'wqwewqe@dsf.com', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(13, 't', '$2a$10$jN85HClO3wxP26jGqp4eEOCupEZ5XzymtcOeETyx6AWWypHGg/IZ6', 't@t.t', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(14, 'asdsadasd', '$2a$10$vS8zsyr5XHG7UDmwlYl0NeYt8.0Q8emGMv7oi5zBmFtR9ATJ.Hsma', 'asadsad@a.casd', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(15, 'm', '$2a$10$mUPH4Y1uZOssAK5ZAwk3bOG8KMAosoJYbmtyk6C0fsBEk8sdpBgRe', 'm@m.c', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(16, 'h', '$2a$10$PzrNMeoAKBlJhlaAlCheQ.Wvc4oDFFqFau5HXpgUCTPRFS0Y8XCB.', 'h@gh.x', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(17, 'gdfh', '$2a$10$1.7niOEudj4EgvJCOhn8pe.4J3HubXN7RtQaI2eQX3G5Mn4xR.t96', 'dfgdfg@sdf.cv', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(18, 'asdsadsad', '$2a$10$eB5ZlzARvkqoH7.4xBpGJOoyxof.h0lPVuZ8GRsOWeZoHxn3d201y', 'dfgdfg@sdf.sdasdadscv', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(19, 'asdsadssdsdad', '$2a$10$BJSdYUG3UCp0DwvoHDIh7edb52ciPkMY3ggjSzeR..1WFSwxrmlrK', 'dfgdfgsdsd@sdf.sdasdadscv', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(20, 'asdsasssdssdsdad', '$2a$10$ZTkmyae/EmHD3Upr6EE.Qu4qPRyPo2NGiGRs6KxgZnKkVBnaVrEEm', 'dfgdfgsdssssd@sdf.sdasdssadscv', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(21, 'fsaf', '$2a$10$G4lK0DQU6xcYDMcB6nVuOu8RoBv8UHLUMg3Y3xNwfBf9mT0eLA8PC', 'af@ads.cs', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(22, 'asdasdw', '$2a$10$e308DAwbyDVq0lJceZieCurNnr5Fuy/VUVt3VmIqIeTfKM9sWyP7q', 'qweee@qwe.cs', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23'),
(23, 'ggggg', '$2a$10$R.oox7sJ1qB1bfPXoVJULeQKkec4GOoYO5.GkD39vg7B0V42gda.y', 'ggg@ggg.gg', '', '', '', 0, '0000-00-00', '', '', '', '2019-11-23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_fk1` (`photo_id`),
  ADD KEY `comment_fk2` (`user_id`);

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`user_id`,`follower_id`),
  ADD KEY `followers_fk1` (`user_id`) USING BTREE,
  ADD KEY `fk2` (`follower_id`);

--
-- Indexes for table `following`
--
ALTER TABLE `following`
  ADD PRIMARY KEY (`user_id`,`following_id`),
  ADD KEY `following_fk1` (`user_id`),
  ADD KEY `following_fk2` (`following_id`);

--
-- Indexes for table `group_detail`
--
ALTER TABLE `group_detail`
  ADD PRIMARY KEY (`group_id`),
  ADD KEY `group_detail_fk1` (`user_id`);

--
-- Indexes for table `group_member`
--
ALTER TABLE `group_member`
  ADD PRIMARY KEY (`group_id`,`user_id`),
  ADD KEY `group_fk2` (`user_id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`like_id`),
  ADD KEY `likes_fk1` (`photo_id`),
  ADD KEY `likes_fk2` (`user_id`);

--
-- Indexes for table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`photo_id`),
  ADD KEY `photo_fk1` (`group_id`),
  ADD KEY `photo_fk2` (`user_id`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `report_fk1` (`photo_id`),
  ADD KEY `report_fk2` (`reporter`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `group_detail`
--
ALTER TABLE `group_detail`
  MODIFY `group_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `like_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photo`
--
ALTER TABLE `photo`
  MODIFY `photo_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `report_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_fk1` FOREIGN KEY (`photo_id`) REFERENCES `photo` (`photo_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comment_fk2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `fk1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk2` FOREIGN KEY (`follower_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `following`
--
ALTER TABLE `following`
  ADD CONSTRAINT `following_fk1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `following_fk2` FOREIGN KEY (`following_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `group_detail`
--
ALTER TABLE `group_detail`
  ADD CONSTRAINT `group_detail_fk1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `group_member`
--
ALTER TABLE `group_member`
  ADD CONSTRAINT `group_fk1` FOREIGN KEY (`group_id`) REFERENCES `group_detail` (`group_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `group_fk2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_fk1` FOREIGN KEY (`photo_id`) REFERENCES `photo` (`photo_id`),
  ADD CONSTRAINT `likes_fk2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `photo_fk1` FOREIGN KEY (`group_id`) REFERENCES `group_detail` (`group_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `photo_fk2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_fk1` FOREIGN KEY (`photo_id`) REFERENCES `photo` (`photo_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `report_fk2` FOREIGN KEY (`reporter`) REFERENCES `user` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
