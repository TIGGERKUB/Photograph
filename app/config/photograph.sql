-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2019 at 03:54 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

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
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
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
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`user_id`, `follower_id`, `timestamp`) VALUES
(20, 21, '2019-12-01 17:17:46'),
(20, 23, '2019-12-01 18:06:46'),
(20, 24, '2019-12-01 18:06:47'),
(20, 25, '2019-12-01 18:06:49'),
(20, 26, '2019-12-01 18:06:51'),
(20, 28, '2019-12-01 18:06:15'),
(20, 29, '2019-12-01 18:06:10'),
(21, 20, '2019-12-01 17:28:32'),
(21, 30, '2019-12-02 14:10:04'),
(30, 21, '2019-12-02 14:15:20');

-- --------------------------------------------------------

--
-- Stand-in structure for view `followers_info`
-- (See below for the actual view)
--
CREATE TABLE `followers_info` (
`user_id` int(8)
,`user_username` varchar(25)
,`follower_id` int(8)
,`follower_username` varchar(25)
,`follower_avatar` varchar(255)
);

-- --------------------------------------------------------

--
-- Table structure for table `following`
--

CREATE TABLE `following` (
  `user_id` int(8) NOT NULL,
  `following_id` int(8) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `following`
--

INSERT INTO `following` (`user_id`, `following_id`, `timestamp`, `status`) VALUES
(20, 21, '2019-12-01 17:28:10', 'Following'),
(21, 20, '2019-12-01 17:15:50', 'Following'),
(21, 30, '2019-12-02 14:15:01', 'Following'),
(23, 20, '2019-12-01 17:29:51', 'Following'),
(23, 21, '2019-12-01 17:29:41', 'Requested'),
(24, 20, '2019-12-01 17:34:20', 'Following'),
(24, 21, '2019-12-01 17:34:33', 'Requested'),
(24, 23, '2019-12-01 17:49:04', 'Requested'),
(24, 25, '2019-12-01 17:49:14', 'Requested'),
(25, 20, '2019-12-01 17:55:55', 'Following'),
(26, 20, '2019-12-01 17:55:38', 'Following'),
(28, 20, '2019-12-01 17:55:17', 'Following'),
(29, 20, '2019-12-01 18:00:53', 'Following'),
(30, 21, '2019-12-02 14:08:37', 'Following');

-- --------------------------------------------------------

--
-- Stand-in structure for view `following_info`
-- (See below for the actual view)
--
CREATE TABLE `following_info` (
`user_id` int(8)
,`user_username` varchar(25)
,`user_avatar` varchar(255)
,`following_id` int(8)
,`following_username` varchar(25)
,`following_avatar` varchar(255)
,`status` varchar(10)
);

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
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
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
  `user_id` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`photo_id`, `photo`, `caption`, `user_id`) VALUES
(47, 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/simon-rae-kSJTEv9w5l4-unsplash-1575219897682.jpg', '', 20),
(48, 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/leio-mclaren-leiomclaren-9NVEXH3Q4fg-unsplash-1575219910098.jpg', '', 20),
(49, 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/brian-gEGUF2Kz9FI-unsplash-1575219938919.jpg', '', 20),
(50, 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/aron-visuals-lh6cxuDOS8s-unsplash-1575219967040.jpg', '', 20),
(51, 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/logo-cpe-1575220358364.png', '', 21),
(52, 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/logo-kmutt-1575220441803.png', '', 21),
(56, 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/houcine-ncib-HxKNtm7moaE-unsplash-1575296190991.jpg', '', 30),
(57, 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/78421681_2594496403930396_2412925322816126976_n-1575296219809.jpg', '', 30),
(58, 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/brian-nVu_pNoZYxg-unsplash-1575296227244.jpg', '', 30);

-- --------------------------------------------------------

--
-- Stand-in structure for view `profile`
-- (See below for the actual view)
--
CREATE TABLE `profile` (
`user_id` int(8)
,`username` varchar(25)
,`first_name` varchar(50)
,`last_name` varchar(50)
,`profile_pic` varchar(255)
,`birthday` date
,`bio` text
,`phone` varchar(10)
,`no_photo` bigint(21)
,`no_following` bigint(21)
,`no_followers` bigint(21)
);

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `report_id` int(8) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(10) NOT NULL,
  `photo_id` int(8) NOT NULL,
  `reporter` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `status` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`status`) VALUES
('Follow Back'),
('Following'),
('Reject'),
('Requested');

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
  `bio` text NOT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `email`, `first_name`, `last_name`, `gender`, `age`, `birthday`, `phone`, `profile_pic`, `bio`, `created`) VALUES
(20, 'tiger.zg', '$2a$10$JiPM1CNKPG7SV6BYy6ONXeg5jO/V4RJsXupQ3KwEK9A9GH0A/506u', 'tiger@mail.com', 'tiger', 'zhang', '', 0, '1998-10-08', '0880198598', 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/77304002_1891663414313588_8502364486621986816_n-1575220653641.jpg', 'May the force be with you', '2019-12-01'),
(21, 'pong.ptw', '$2a$10$iNudVVNRNnp/LP.WgRW2kuDoiZUb5gHE7D6BnDl6yjSRzsfH7YH4a', 'tachawin.test@gmail.com', 'Tachawin', 'Wiwattanasopa', '', 0, '2019-12-01', '095772899', 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/77425163_2270913876348672_1224372979975061504_n-1575220246263.jpg', 'CPE 31\nKMUTT\n', '2019-12-01'),
(23, 'pleum.t', '$2a$10$bN6UFyW09t.wI.Wzdr0MBOkawlb/woq6g5Ed1mtDMJq6PouS9piVC', 'jednitan10@gmail.com', '', '', '', 0, '0000-00-00', '', 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/78496197_475056703127409_3487036737341882368_n-1575221481361.jpg', 'FourtoNine', '2019-12-01'),
(24, 'juii_t', '$2a$10$CLqCoWn6CK4uh6wHWCKgLOfbOwP5cXPlBx/lm5dS2Yqu60tRwOwq6', 'jui@mail.com', '', '', '', 0, '0000-00-00', '', 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/123-1575223171722.png', '', '2019-12-01'),
(25, 'musicrvy', '$2a$10$rqebkuujnpp8OwwjAVeRseMgN1ETuN/np6YJlmwNh2xDco93RiFcG', 'm@m.com', '', '', '', 0, '0000-00-00', '', 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/78292448_478234706384626_7172829155094953984_n-1575222298336.jpg', '', '2019-12-01'),
(26, 'issa.dia', '$2a$10$3a.intDiKOT04.s4/9wbOeOnO0XbGQ5gAPFsHcffJPOzGOlwfFh0O', 'i@i.com', '', '', '', 0, '0000-00-00', '', 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/78261783_3832091510149701_2049288420596908032_n%20%281%29-1575221902163.jpg', '', '2019-12-01'),
(28, 'pound', '$2a$10$2kL3G0RZcQes6TiNjj9CYeJrF1pXdZ.SkABrl6ynCBMONgzr9nqNy', 'p@p.com', '', '', '', 0, '0000-00-00', '', 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/220388_2031494395199_8280967_o-1575222891055.jpg', '', '2019-12-01'),
(29, 'aomsin', '$2a$10$pm8Lw4H9cjLIlzTJerpVnO3JfxFXJvIc1PBn5WgPz.GKqrlrqhFb6', 'a@a.com', '', '', '', 0, '0000-00-00', '', 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/67409205_2289018001151337_1046890186681614336_n-1575223248912.jpg', '', '2019-12-01'),
(30, 'abcde', '$2a$10$kxYk2TKcpqFbUQErg4eMteDBXY9l4tA1dSLkWDwdQ9vzzmmbKm7Pm', 'abc@hotmail.com', 'J', 'Good', '', 0, '1999-01-04', '0897654231', 'https://pongtest5555.s3.ap-southeast-1.amazonaws.com/analise-benevides-gbx-Gnl-48I-unsplash-1575294929430.jpg', 'LOL', '2019-12-02');

-- --------------------------------------------------------

--
-- Structure for view `followers_info`
--
DROP TABLE IF EXISTS `followers_info`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `followers_info`  AS  select `f`.`user_id` AS `user_id`,(select `u`.`username` from `user` `u` where (`u`.`user_id` = `f`.`user_id`)) AS `user_username`,`f`.`follower_id` AS `follower_id`,(select `u`.`username` from `user` `u` where (`u`.`user_id` = `f`.`follower_id`)) AS `follower_username`,(select `u`.`profile_pic` from `user` `u` where (`u`.`user_id` = `f`.`follower_id`)) AS `follower_avatar` from `followers` `f` ;

-- --------------------------------------------------------

--
-- Structure for view `following_info`
--
DROP TABLE IF EXISTS `following_info`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `following_info`  AS  select `f`.`user_id` AS `user_id`,(select `u`.`username` from `user` `u` where (`u`.`user_id` = `f`.`user_id`)) AS `user_username`,(select `u`.`profile_pic` from `user` `u` where (`u`.`user_id` = `f`.`user_id`)) AS `user_avatar`,`f`.`following_id` AS `following_id`,(select `u`.`username` from `user` `u` where (`u`.`user_id` = `f`.`following_id`)) AS `following_username`,(select `u`.`profile_pic` from `user` `u` where (`u`.`user_id` = `f`.`following_id`)) AS `following_avatar`,`f`.`status` AS `status` from `following` `f` ;

-- --------------------------------------------------------

--
-- Structure for view `profile`
--
DROP TABLE IF EXISTS `profile`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `profile`  AS  select `u`.`user_id` AS `user_id`,`u`.`username` AS `username`,`u`.`first_name` AS `first_name`,`u`.`last_name` AS `last_name`,`u`.`profile_pic` AS `profile_pic`,`u`.`birthday` AS `birthday`,`u`.`bio` AS `bio`,`u`.`phone` AS `phone`,(select count(`p`.`photo_id`) from `photo` `p` where (`u`.`user_id` = `p`.`user_id`)) AS `no_photo`,(select count(`g`.`following_id`) from `following` `g` where ((`g`.`user_id` = `u`.`user_id`) and (`g`.`status` = 'Following'))) AS `no_following`,(select count(`r`.`follower_id`) from `followers` `r` where (`r`.`user_id` = `u`.`user_id`)) AS `no_followers` from `user` `u` group by `u`.`user_id` ;

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
  ADD KEY `photo_fk2` (`user_id`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `report_fk1` (`photo_id`),
  ADD KEY `report_fk2` (`reporter`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`status`);

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
  MODIFY `photo_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `report_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

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
