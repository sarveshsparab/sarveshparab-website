-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jul 03, 2018 at 06:37 AM
-- Server version: 5.6.39-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `spwebsitedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE IF NOT EXISTS `education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `institute` varchar(100) NOT NULL,
  `symbol` varchar(5) DEFAULT NULL,
  `short_desc` varchar(200) DEFAULT NULL,
  `meta` tinyint(1) NOT NULL DEFAULT '0',
  `degree` varchar(200) NOT NULL,
  `time_frame` varchar(100) NOT NULL,
  `display_order` int(11) NOT NULL,
  `last_update_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `display_order` (`display_order`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `institute`, `symbol`, `short_desc`, `meta`, `degree`, `time_frame`, `display_order`, `last_update_ts`) VALUES
(1, 'Visvesvaraya National Institute of Technology', 'BT', 'CGPA : 8.76/10|University Rank (Computer Science) : 3rd', 1, 'Bachelors of Technology in Computer Science and Engineering', 'Jul 2012 - May 2016', 3, '2018-06-27 14:05:40'),
(2, 'University of Southern California', 'MS', '', 1, 'Masters of Science in Computer Science', 'Aug 2018 - May 2020', 4, '2018-06-27 14:16:16'),
(3, 'Bombay Cambridge School', 'SSC', 'Aggregate : 86.76%', 1, 'Maharashtra State Board - Secondary School Certificate', '2000 - 2009', 1, '2018-06-29 16:22:36'),
(4, 'Dixit Junior College of Science', 'HSC', 'Aggregate : 8.4/10|College Rank : 1st', 1, 'Maharashtra State Board - Higher Secondary Certificate', '2009 - 2011', 2, '2018-06-29 16:22:36');

-- --------------------------------------------------------

--
-- Table structure for table `education_skills`
--

CREATE TABLE IF NOT EXISTS `education_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_id` int(11) NOT NULL,
  `edu_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `skill_id` (`skill_id`,`edu_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `education_skills`
--

INSERT INTO `education_skills` (`id`, `skill_id`, `edu_id`) VALUES
(17, 38, 3);

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE IF NOT EXISTS `experience` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `organisation` varchar(50) NOT NULL,
  `symbol` varchar(5) DEFAULT NULL,
  `short_desc` varchar(200) DEFAULT NULL,
  `meta` tinyint(1) NOT NULL DEFAULT '0',
  `designation` varchar(100) NOT NULL,
  `time_frame` varchar(100) NOT NULL,
  `display_order` int(11) NOT NULL,
  `last_update_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `display_order` (`display_order`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `organisation`, `symbol`, `short_desc`, `meta`, `designation`, `time_frame`, `display_order`, `last_update_ts`) VALUES
(1, 'Morgan Stanley', 'TA', 'Underwent Technology Analyst Program|Breach Prediction and Monitoring System|Private Wealth Management - Asia', 1, 'Technology Analyst', 'Aug 2016 - Dec 2016', 2, '2018-06-27 22:14:19'),
(2, 'Morgan Stanley', 'TA', 'Cloud on-boarding of Variation Margin Engine|Listed Derivatives Tech.', 1, 'Technology Associate', 'Jan 2017 - Dec 2017', 3, '2018-06-27 22:14:19'),
(3, 'Morgan Stanley', 'SA', 'MIFID-2 Regulation|Principal Figuration Formulae Parser|Listed Derivatives Tech.|Trade Enrichment Tech.', 1, 'Senior Associate', 'Jan 2018 - Jun 2018', 4, '2018-06-27 22:14:19'),
(4, 'Vaultize', 'I', 'Developed an API to connect with and interpret data from any CMIS source', 1, 'SDE Intern', 'May 2015 - Jul 2015', 1, '2018-06-27 22:14:19');

-- --------------------------------------------------------

--
-- Table structure for table `experience_skills`
--

CREATE TABLE IF NOT EXISTS `experience_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_id` int(11) NOT NULL,
  `exp_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `skill_id` (`skill_id`,`exp_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=53 ;

--
-- Dumping data for table `experience_skills`
--

INSERT INTO `experience_skills` (`id`, `skill_id`, `exp_id`) VALUES
(1, 39, 4),
(2, 40, 4),
(3, 41, 4),
(4, 42, 4),
(5, 43, 4),
(6, 44, 4),
(7, 45, 4),
(8, 29, 4),
(9, 50, 1),
(10, 21, 1),
(11, 11, 1),
(12, 46, 1),
(13, 49, 1),
(14, 47, 1),
(15, 48, 1),
(16, 10, 2),
(17, 8, 2),
(18, 19, 2),
(19, 18, 2),
(20, 13, 2),
(21, 7, 2),
(22, 61, 2),
(23, 51, 2),
(24, 52, 2),
(25, 62, 2),
(26, 60, 2),
(27, 63, 2),
(28, 64, 2),
(29, 65, 2),
(30, 67, 2),
(31, 53, 3),
(32, 54, 3),
(33, 11, 3),
(34, 55, 3),
(35, 56, 3),
(36, 59, 3),
(37, 13, 3),
(38, 19, 3),
(39, 18, 3),
(40, 7, 3),
(41, 66, 3),
(42, 69, 3),
(43, 70, 3),
(44, 71, 3),
(45, 72, 3),
(46, 71, 2),
(47, 70, 2),
(48, 70, 1),
(49, 71, 1),
(50, 3, 4),
(51, 4, 4),
(52, 73, 4);

-- --------------------------------------------------------

--
-- Table structure for table `meta`
--

CREATE TABLE IF NOT EXISTS `meta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ref_id` int(11) NOT NULL,
  `ref_type` varchar(10) NOT NULL,
  `type` varchar(500) NOT NULL,
  `data` varchar(50000) NOT NULL,
  `display_order` int(11) NOT NULL,
  `last_update_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=69 ;

--
-- Dumping data for table `meta`
--

INSERT INTO `meta` (`id`, `ref_id`, `ref_type`, `type`, `data`, `display_order`, `last_update_ts`) VALUES
(1, 1, 'edu', 'Electives', 'Artificial Intelligence|Cloud Computing|Information Retrieval|Neural Networks and Fuzzy Logic|Data Mining an Warehousing|Network Security', 1, '2018-06-29 09:29:11'),
(2, 2, 'edu', 'Electives', 'Artificial Intelligence', 1, '2018-06-29 09:29:11'),
(3, 1, 'edu', 'Clubs', 'ACM VNIT Nagpur Chapter - Core Committee |Programming Club|Astronomy Club', 2, '2018-06-29 10:03:32'),
(4, 1, 'edu', 'Achievements', '2nd in college TechFest(AXIS) - Autonomous Robotics|Organised hackathons on campus', 3, '2018-06-29 11:33:51'),
(7, 3, 'edu', 'Clubs', 'Science Club|Maths Club|Garden4Life', 2, '2018-06-29 17:03:58'),
(8, 3, 'edu', 'Achievements', 'Tritiya Sopan Scout (Level 3)', 1, '2018-06-29 17:03:58'),
(9, 3, 'edu', 'Achievements', '6th Ranked in State Scholarship Exam|1st in Mumbai - Maths Concept Exam(All 3 levels)', 1, '2018-06-29 17:03:58'),
(10, 3, 'edu', 'Achievements', 'Distinction in Maths, Science, Cyber Olympiads (Class 6-9)', 1, '2018-06-29 17:03:58'),
(11, 4, 'edu', 'Achievements', 'Top 1% in the state', 2, '2018-06-29 17:06:25'),
(12, 4, 'edu', 'Vocational Subjects', 'Computer Science', 1, '2018-06-29 17:06:26'),
(13, 4, 'exp', 'Brief', 'API compliant with Enterprise Document Management System and delegate with proprietary Vaultize APIs.', 1, '2018-06-30 10:41:44'),
(14, 4, 'exp', 'Brief', 'Added functionality for version control management irrespective of underlying ECM (Enterprise Content Managers)', 2, '2018-06-30 10:41:44'),
(15, 4, 'exp', 'Features', 'Built a webPy based user interface', 3, '2018-06-30 10:41:44'),
(16, 4, 'exp', 'Features', 'Track version changes', 4, '2018-06-30 10:41:44'),
(17, 4, 'exp', 'Features', 'Perform file / folder operations', 5, '2018-06-30 10:41:45'),
(18, 4, 'exp', 'Links', 'http://www.vaultize.com/', 6, '2018-06-30 10:41:45'),
(19, 4, 'exp', 'Links', 'https://www.oasis-open.org/ |https://www.alfresco.com', 7, '2018-06-30 10:41:45'),
(30, 1, 'exp', 'Project', 'Also built OLAP Data cubes to perform historical transactional analytics to predict breaches in transactions ranging from organization to client level of granularity.', 4, '2018-06-30 11:09:27'),
(27, 1, 'exp', 'Brief', 'Underwent the industry leading graduates training program - Technology Analyst Program 2016.', 1, '2018-06-30 11:09:26'),
(28, 1, 'exp', 'Trainings', 'Java|Scala|C#|C++|Spring|IBM WebSphere MQs|IBM DB2|Sybase|AngularJS', 2, '2018-06-30 11:09:26'),
(29, 1, 'exp', 'Project', 'Developed a highly scalable system in Java capable to detect breaches in real time based on hundreds of input sources for millions of client transactions and publish them on an angularJS web UI for the Private Wealth Management PWM - Asia team.', 3, '2018-06-30 11:09:26'),
(31, 2, 'exp', 'Brief', 'Re-architectured the existing variation margin calculation system to be fault tolerant and failure resilient.', 1, '2018-06-30 19:19:55'),
(32, 2, 'exp', 'Brief', 'Making it cloud ready to be on-boarded onto the firms internal private cloud infrastructure, thus reducing the overall application infrastructure cost.', 2, '2018-06-30 19:19:55'),
(33, 2, 'exp', 'Brief', 'Leveraged Apache Zookeeper as an arbitrator among the dynamically varying number of application instances.', 3, '2018-06-30 19:19:55'),
(34, 2, 'exp', 'Brief', 'Also to help uniquely identify different dynamic instances.', 4, '2018-06-30 19:19:55'),
(35, 2, 'exp', 'Brief', 'Increased the throughput for batch of 100k transactions from ~25 minutes to ~1.2 minutes.', 5, '2018-06-30 19:19:56'),
(36, 2, 'exp', 'Brief', 'Built to scale with the least human intervention by creating infrastructural resources on demand.', 6, '2018-06-30 19:19:56'),
(37, 2, 'exp', 'Links', 'https://github.com/Morgan-Stanley/treadmill', 7, '2018-06-30 19:21:43'),
(38, 3, 'exp', 'Project 1', 'Worked and implemented the technical changes involved in MIFID-2 European regulatory change for Indirect Clearing.', 1, '2018-06-30 19:30:45'),
(39, 3, 'exp', 'Project 1', 'Effectuated a new trade processing model to meet the new regulatory requirements.', 2, '2018-06-30 19:30:46'),
(40, 3, 'exp', 'Project 2', 'Worked on a proof of concept for a new custom Context-Free grammar based language and its underlying parser.', 3, '2018-06-30 19:30:46'),
(41, 3, 'exp', 'Project 2', 'Built a custom grammar and its parser from scratch for efficiently interpret and understand convoluted and deeply nested formulas.', 4, '2018-06-30 19:30:46'),
(42, 3, 'exp', 'Project 2', 'This new language would help convert complex mathematical financial formulas and operations into strings which can be shared across a new client-server based paradigm and parsed locally and further cached for faster computation.', 5, '2018-06-30 19:30:46'),
(43, 7, 'prj', 'Brief', 'Developed a web app to manage and track individual expenses and transactions within their social groups', 1, '2018-07-01 18:57:35'),
(44, 7, 'prj', 'Brief', 'Used weighted DAGs to balance and aggregate transactions within groups', 2, '2018-07-01 18:57:35'),
(45, 7, 'prj', 'Features', 'Ability to create custom social groups and manage expenses across those groups', 3, '2018-07-02 08:42:49'),
(46, 7, 'prj', 'Features', 'Establish group level admin access control and transaction validation', 4, '2018-07-02 08:42:49'),
(47, 7, 'prj', 'Features', 'Cash settlement options', 5, '2018-07-02 08:42:49'),
(48, 7, 'prj', 'Features', 'Detailed transactions records - Available in PDF and excel', 6, '2018-07-02 08:42:49'),
(49, 7, 'prj', 'Features', 'Auto settle and balance transactions within user groups', 7, '2018-07-02 08:42:50'),
(50, 7, 'prj', 'Features', 'End user transaction / purchase verification - Efficiently handle fraudulent transactions', 8, '2018-07-02 08:42:50'),
(51, 7, 'prj', 'Features', 'User friendly and intuitive web interface', 9, '2018-07-02 08:42:50'),
(52, 6, 'prj', 'Achievements', 'Got second price at the college technical festival - AXIS.', 1, '2018-07-02 08:42:50'),
(53, 6, 'prj', 'Achievements', 'Represented my bot at the I.I.T. Bombay TechFest', 2, '2018-07-02 08:42:51'),
(54, 11, 'prj', 'Features', 'Manage students and faculty data, with auto-promotion for students at the end of the academic year', 1, '2018-07-02 08:42:51'),
(55, 11, 'prj', 'Features', 'Varied access control across the web app based on the user type - Student, Teacher, Principal, Admin', 2, '2018-07-02 08:42:51'),
(56, 11, 'prj', 'Features', 'Custom course structure design and grading format - completely modular and subject agnostic', 3, '2018-07-02 08:42:52'),
(57, 11, 'prj', 'Features', 'Course structure and report card format locking and authorization', 4, '2018-07-02 08:42:52'),
(58, 11, 'prj', 'Features', 'Client level validation for student information and marks', 5, '2018-07-02 08:42:52'),
(59, 11, 'prj', 'Features', 'Auto grade calculation with course level grading scales', 6, '2018-07-02 08:42:52'),
(60, 11, 'prj', 'Features', 'Generate performance reports at school/division/student granularity levels', 7, '2018-07-02 08:42:53'),
(61, 11, 'prj', 'Features', 'Export reports as Excel and PDF', 8, '2018-07-02 08:42:53'),
(62, 11, 'prj', 'Features', 'User friendly interface and hosted on Amazon AWS\r\n', 9, '2018-07-02 08:42:53'),
(63, 16, 'prj', 'Brief', 'Tag/Annotation Recommendation system for community question answer forums. Thus, enabling quick resolution of questions on forums from a targeted audience. The aim of the project was also to consider user inputs to auto correlate tags and ranking the recommendations on semantic closeness to the questions in corpus.', 1, '2018-07-02 08:46:00'),
(64, 16, 'prj', 'Brief', 'Achieved an accuracy over 96% in appropriate tag recommendations. Also, successfully developed an algorithm to rank the tags based to high correlation metrics, user behavior and semantic closeness.', 2, '2018-07-02 08:46:00'),
(65, 16, 'prj', 'Brief', 'Using the content-based filtering approach of recommender systems, TagMyQuestion was developed to annotate the question asked by the user on QA forum with the suitable tags. The system suggests the relevant tags by effectively analyzing the question and extracting the explicit tags. Plying this knowledge of explicit tags and performing semantic analysis, the clustered question pool which forms the knowledge source is generated. The system further analyses the clustered knowledge pool for suggesting additional relevant tags, thus recommending better annotations.', 3, '2018-07-02 08:46:01'),
(66, 16, 'prj', 'Brief', 'Further, the recommended tags to be chosen by the user for annotating his or her question are ranked according to the relevance. To calculate the exact relevance three factors are taken into consideration, the Semantic closeness of the user question, the tag correlation within he corpus and the user behavior in building tag confidences. An innovative approach has been made by training the semantic closeness algorithms to tune according to the corpus domain and apply weights based on relatedness.', 4, '2018-07-02 08:46:01'),
(67, 16, 'prj', 'Brief', 'TagMyQuestion aims at providing meaningful, trustworthy and persuasive recommendations which will stratify the question in the appropriate domain of a QA forum.', 5, '2018-07-02 08:46:01');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `title_photo` varchar(5000) DEFAULT NULL,
  `short_desc` mediumtext NOT NULL,
  `meta` tinyint(1) NOT NULL DEFAULT '0',
  `code_link` varchar(200) DEFAULT NULL,
  `time_frame` varchar(100) NOT NULL,
  `display_order` int(11) NOT NULL,
  `last_update_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `title_photo`, `short_desc`, `meta`, `code_link`, `time_frame`, `display_order`, `last_update_ts`) VALUES
(3, 'Ball Tracking Bot ', 'http://www.sarveshparab.com/resources/projectsSection/prj_3.jpg', 'Built an autonomous bot with a mounted camera to track a rolling balls trajectory and follow it.', 1, '', 'Oct 2012', 1, '2018-06-30 20:12:58'),
(4, 'Virtual Pad                                                                                                                    ', NULL, 'Developed a mid-air writing pad to capture figure strokes from a live video feed and interpret English alphabets|Using intensity-weighted centroids to track and analyze image sequences.', 1, NULL, 'Feb 2013', 2, '2018-06-30 20:12:58'),
(5, 'ACM Compute 2014                                                                                                                                      ', NULL, 'Developed a web portal in PHP 5.6 to aid and facilitate the annual ACM conference', 1, NULL, 'Dec 2013', 3, '2018-06-30 20:12:58'),
(6, 'Autonomous Robot ', 'http://www.sarveshparab.com/resources/projectsSection/prj_6.jpg', 'Led a team to build and program an autonomous bot capable of interpreting and maneuvering a convoluted grid of monochromatic lines', 1, NULL, 'Jan 2014', 4, '2018-06-30 20:12:59'),
(7, 'VirtualBank Expense Manager ', 'http://www.sarveshparab.com/resources/projectsSection/prj_7.JPG', 'Designed, developed & hosted the web based application for managing students finances and expense transactions. A simplistic but highly efficient and very user friendly way to track and manage ones finances. Hosted the site on godaddy.com to have 24x7 access from anywhere over internet.', 1, 'https://github.com/sarveshsparab/VirtualBank', 'Jun 2014 - Jul 2014', 5, '2018-06-30 20:12:59'),
(8, 'Social Networking Simulator ', NULL, 'Built a Java swing desktop application to simulate and visualize the graph based social networks', 1, NULL, 'May 2014 - Jun 2014', 6, '2018-06-30 20:12:59'),
(9, 'Assembler                                                                                                                                             ', NULL, 'Implemented a multi-pass assembler in C to understand the functionality of symbol tables and memory mapping', 1, 'https://github.com/sarveshsparab/Assembler', 'Nov 2014', 7, '2018-06-30 20:12:59'),
(10, '10 * 10 Bit Symbol Detection                                                                                                                   ', NULL, 'Developed a multilayer perceptron neural network with back propagation to identify alphanumeric patterns or emotions from 10 * 10 binary images which is capable to interpret distortions and correct them', 1, 'https://github.com/sarveshsparab/NeuralImageClassifier', 'Nov 2014', 8, '2018-06-30 20:12:59'),
(11, 'Mulyankan                                                                                                                                             ', 'http://www.sarveshparab.com/resources/projectsSection/prj_11.JPG', 'Developed a web app to assist schools in assessment and collating every students grade and generate mark sheets and other relevant MIS reports', 1, 'https://github.com/sarveshsparab/mulyankan', 'May 2015 - Jul 2015', 9, '2018-06-30 20:13:00'),
(12, '8 Tile Puzzle Solver                                                                                                                                  ', 'http://www.sarveshparab.com/resources/projectsSection/prj_12.png', 'Analyzed the performance of Iterative Depth Search and A* path finding algorithms with the randomized 8 Tile puzzle simulation', 1, 'https://github.com/sarveshsparab/ArtificialIntelligenceBasics', 'Oct 2015', 10, '2018-06-30 20:13:00'),
(13, 'Information Retrieval  ', NULL, 'Developed a document partitioned search engine using BM25 Ranking and analyzed query performance with varied indices', 1, 'https://github.com/sarveshsparab/BM25', 'Nov 2015', 11, '2018-06-30 20:13:00'),
(14, 'TSP Simulation                                                                                                                 ', NULL, 'Devised a simulation for the TSP using genetic algorithm with randomized roulette wheel selection, crossover and mutation', 1, 'https://github.com/sarveshsparab/ArtificialIntelligenceBasics', 'Nov 2015', 12, '2018-06-30 20:13:00'),
(15, 'Data Mining                                                                                                                                           ', 'http://www.sarveshparab.com/resources/projectsSection/prj_15.png', 'Contrasting and analyzing the performance of various clustering algorithms on UCI datasets using R', 1, 'https://github.com/sarveshsparab/DataMiningBasics', 'Mar 2016', 13, '2018-06-30 20:13:01'),
(16, 'TagMyQuestion', 'http://www.sarveshparab.com/resources/projectsSection/prj_16.JPG', 'Developed an adaptive tag recommendation system for questions in community forums based on the forum domain and user behavior|Used supervised-learning to establish the dominance of multiple semantic closeness algorithms based on the domain|Established ranking with cumulative corpus reduction based on high correlation metrics and semantic analysis ', 1, 'https://github.com/sarveshsparab/QuestionAnnotator', 'Jul 2015 - Apr 2016', 14, '2018-06-30 20:13:01'),
(17, 'Personal Website', 'http://www.sarveshparab.com/resources/projectsSection/prj_17.JPG', 'Designed and developed this website|Exploring new and cutting edge web technologies', 1, 'https://github.com/sarveshsparab/sarveshparab-website', 'Apr 2018 - May 2018', 15, '2018-07-01 19:14:00');

-- --------------------------------------------------------

--
-- Table structure for table `projects_skills`
--

CREATE TABLE IF NOT EXISTS `projects_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_id` int(11) NOT NULL,
  `prj_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `skill_id` (`skill_id`,`prj_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=90 ;

--
-- Dumping data for table `projects_skills`
--

INSERT INTO `projects_skills` (`id`, `skill_id`, `prj_id`) VALUES
(1, 79, 3),
(2, 80, 3),
(3, 81, 3),
(4, 79, 4),
(5, 82, 4),
(6, 1, 5),
(7, 3, 5),
(8, 4, 5),
(9, 83, 3),
(10, 83, 6),
(11, 80, 6),
(12, 81, 6),
(13, 1, 7),
(14, 2, 7),
(15, 3, 7),
(16, 4, 7),
(17, 15, 7),
(18, 29, 7),
(19, 73, 7),
(20, 11, 8),
(21, 15, 8),
(22, 87, 8),
(23, 88, 8),
(24, 86, 8),
(25, 74, 9),
(26, 6, 10),
(27, 89, 10),
(28, 11, 10),
(29, 88, 10),
(30, 1, 11),
(31, 2, 11),
(32, 3, 11),
(33, 4, 11),
(34, 90, 11),
(35, 29, 11),
(36, 88, 11),
(37, 15, 11),
(38, 11, 12),
(39, 91, 12),
(40, 88, 12),
(41, 11, 14),
(42, 91, 14),
(43, 88, 14),
(44, 15, 14),
(45, 11, 13),
(46, 15, 13),
(47, 88, 13),
(48, 92, 13),
(49, 93, 15),
(50, 11, 15),
(51, 78, 15),
(52, 88, 15),
(53, 1, 16),
(54, 2, 16),
(55, 3, 16),
(56, 4, 16),
(57, 8, 16),
(58, 11, 16),
(59, 15, 16),
(60, 17, 16),
(61, 20, 16),
(62, 21, 16),
(63, 22, 16),
(64, 29, 16),
(65, 46, 16),
(66, 47, 16),
(67, 55, 16),
(68, 56, 16),
(69, 48, 16),
(70, 59, 16),
(71, 65, 16),
(72, 88, 16),
(73, 90, 16),
(74, 91, 16),
(75, 1, 17),
(76, 2, 17),
(77, 3, 17),
(78, 4, 17),
(79, 5, 17),
(80, 15, 17),
(81, 22, 17),
(82, 23, 17),
(83, 29, 17),
(84, 46, 17),
(85, 47, 17),
(86, 66, 17),
(87, 90, 17),
(88, 73, 17),
(89, 73, 16);

-- --------------------------------------------------------

--
-- Table structure for table `quotations`
--

CREATE TABLE IF NOT EXISTS `quotations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `author` varchar(50) DEFAULT NULL,
  `last_update_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COMMENT='This table hold the quotations to be displayed on the home section' AUTO_INCREMENT=10 ;

--
-- Dumping data for table `quotations`
--

INSERT INTO `quotations` (`id`, `content`, `author`, `last_update_ts`) VALUES
(1, 'Technology is anything that wasnt around when you were born.', 'Alan Kay', '2018-06-27 10:25:04'),
(2, 'Any sufficiently advanced technology is equivalent to magic.', 'Arthur C. Clarke', '2018-06-27 10:25:04'),
(3, 'All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.', 'Mark Kennedy', '2018-06-27 10:25:04'),
(4, 'Just because something doesnt do what you planned it to do doesnt mean its useless.', 'Thomas Edison', '2018-06-27 10:25:05'),
(5, 'One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man.', 'Elbert Hubbard', '2018-06-27 10:25:05'),
(6, 'Technology is a word that describes something that doesnt work yet.', 'Douglas Adams', '2018-06-27 10:25:05'),
(7, 'The art and science of asking questions is the source of all knowledge.', 'Thomas Berger', '2018-06-27 10:25:05'),
(8, 'Science is a way of thinking much more than it is a body of knowledge.', 'Carl Sagan', '2018-06-27 10:25:06'),
(9, 'Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.', 'Stephen Hawking', '2018-06-27 10:25:06');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE IF NOT EXISTS `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `level` decimal(10,0) NOT NULL,
  `display_order` int(11) NOT NULL,
  `last_update_ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `type` (`type`,`name`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=94 ;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `type`, `name`, `level`, `display_order`, `last_update_ts`) VALUES
(1, 'web', 'PHP', '90', 3, '2018-06-27 20:07:15'),
(2, 'web', 'jQuery', '95', 2, '2018-06-27 20:07:15'),
(3, 'web', 'HTML5', '95', 1, '2018-06-27 20:07:16'),
(4, 'web', 'CSS3', '80', 4, '2018-06-27 20:07:16'),
(5, 'web', 'SCSS', '15', 5, '2018-06-27 20:07:16'),
(6, 'domains', 'Machine Learning', '30', 3, '2018-06-27 20:07:17'),
(7, 'domains', 'Listed Derivatives', '75', 2, '2018-06-27 20:07:17'),
(8, 'domains', 'Cloud Computing', '70', 1, '2018-06-27 20:07:17'),
(9, 'domains', 'Finance', '65', 4, '2018-06-27 20:07:18'),
(10, 'domains', 'Distributed Computing', '85', 5, '2018-06-27 20:07:18'),
(11, 'languages', 'Java', '95', 1, '2018-06-28 20:51:58'),
(12, 'languages', 'PHP', '85', 2, '2018-06-28 20:51:58'),
(13, 'frameworks', 'Spring', '70', 1, '2018-06-28 20:51:58'),
(14, 'frameworks', 'Hibernate', '35', 2, '2018-06-28 20:51:58'),
(15, 'databases', 'MySQL', '90', 1, '2018-06-28 20:51:58'),
(16, 'databases', 'Oracle 11g', '80', 2, '2018-06-28 20:51:59'),
(17, 'databases', 'Mongo DB', '70', 3, '2018-06-28 20:51:59'),
(18, 'databases', 'Sybase', '75', 4, '2018-06-28 20:51:59'),
(19, 'databases', 'IBM DB2', '75', 5, '2018-06-28 20:51:59'),
(20, 'databases', 'Neo4J', '55', 6, '2018-06-28 20:51:59'),
(21, 'databases', 'H2', '60', 7, '2018-06-28 20:52:00'),
(22, 'platforms', 'Amazon AWS', '35', 1, '2018-06-28 20:52:00'),
(23, 'platforms', 'Google Cloud', '65', 2, '2018-06-28 20:52:00'),
(24, 'platforms', 'Windows', '90', 3, '2018-06-28 20:52:00'),
(25, 'platforms', 'Ubuntu', '75', 4, '2018-06-28 20:52:01'),
(26, 'platforms', 'RHEL', '70', 5, '2018-06-28 20:52:01'),
(27, 'tools', 'Adobe Photoshop', '60', 1, '2018-06-28 20:52:01'),
(28, 'tools', 'Abobe Premiere', '65', 2, '2018-06-28 20:52:01'),
(29, 'tools', 'Git', '75', 3, '2018-06-28 20:52:01'),
(30, 'tools', 'Perforce', '90', 4, '2018-06-28 20:52:02'),
(31, 'sports', 'Swimming', '95', 1, '2018-06-28 21:58:10'),
(32, 'sports', 'Table Tennis', '50', 2, '2018-06-28 21:58:10'),
(33, 'sports', 'Badminton', '50', 3, '2018-06-28 21:58:10'),
(34, 'hobby', 'Piano', '5', 1, '2018-06-28 21:58:10'),
(35, 'hobby', 'Hiking', '50', 2, '2018-06-28 21:58:10'),
(36, 'hobby', 'Trecking', '50', 3, '2018-06-28 21:58:11'),
(37, 'hobby', 'Philately', '90', 4, '2018-06-28 21:58:11'),
(38, 'hobby', 'Robotics', '50', 5, '2018-06-29 19:12:53'),
(39, 'languages', 'Python', '70', 3, '2018-06-30 10:48:18'),
(40, 'tools', 'Alfresco', '80', 5, '2018-06-30 10:48:18'),
(41, 'tools', 'Microsoft SharePoint', '45', 6, '2018-06-30 10:48:18'),
(42, 'frameworks', 'WebPy', '75', 3, '2018-06-30 10:48:18'),
(43, 'databases', 'Apache InMemory', '60', 8, '2018-06-30 10:48:18'),
(44, 'domains', 'Content Mgmt.', '50', 6, '2018-06-30 10:48:19'),
(45, 'domains', 'Security', '40', 7, '2018-06-30 10:50:53'),
(46, 'domains', 'Web Services', '80', 8, '2018-06-30 11:13:30'),
(47, 'web', 'REST', '75', 5, '2018-06-30 11:13:31'),
(48, 'domains', 'Prediction Systems', '80', 6, '2018-06-30 11:13:31'),
(49, 'web', 'AngularJS', '30', 6, '2018-06-30 11:13:31'),
(50, 'domains', 'OLAP', '65', 7, '2018-06-30 11:13:31'),
(51, 'tools', 'IBM MQs', '85', 7, '2018-06-30 11:16:19'),
(52, 'frameworks', 'Apache Zookeeper', '80', 4, '2018-06-30 11:16:19'),
(53, 'frameworks', 'ANTLR', '85', 5, '2018-06-30 18:42:16'),
(54, 'frameworks', 'SPEL', '75', 6, '2018-06-30 18:42:16'),
(55, 'tools', 'Stanford NLP', '50', 8, '2018-06-30 18:42:16'),
(56, 'domains', 'Natural Language Processing', '50', 8, '2018-06-30 18:42:16'),
(57, 'frameworks', 'jMock', '90', 7, '2018-06-30 18:42:16'),
(58, 'frameworks', 'Mockito', '90', 8, '2018-06-30 18:42:17'),
(59, 'domains', 'Language Parser', '70', 9, '2018-06-30 18:43:55'),
(60, 'frameworks', 'HazelCast', '80', 9, '2018-06-30 18:55:34'),
(61, 'frameworks', 'JAXB', '75', 10, '2018-06-30 18:58:09'),
(62, 'tools', 'Dynamic MQs', '95', 9, '2018-06-30 18:59:46'),
(63, 'languages', 'Perl', '80', 4, '2018-06-30 19:01:00'),
(64, 'languages', 'Bash', '75', 5, '2018-06-30 19:01:00'),
(65, 'domains', 'Functional Programming', '65', 10, '2018-06-30 19:02:49'),
(66, 'domains', 'Micro Services', '50', 11, '2018-06-30 19:13:31'),
(67, 'tools', 'Autosys', '85', 10, '2018-06-30 19:13:31'),
(68, 'frameworks', 'Treadmill', '95', 11, '2018-06-30 19:20:50'),
(69, 'tools', 'JIRA', '90', 11, '2018-06-30 19:23:35'),
(70, 'tools', 'Apache Ant', '80', 12, '2018-06-30 19:23:36'),
(71, 'tools', 'Apache Ivy', '70', 13, '2018-06-30 19:23:36'),
(72, 'tools', 'Jenkins', '75', 14, '2018-06-30 19:23:59'),
(73, 'languages', 'JavaScript', '90', 6, '2018-06-30 19:26:58'),
(74, 'languages', 'C', '87', 7, '2018-06-30 19:45:10'),
(75, 'languages', 'C++', '70', 8, '2018-06-30 19:45:10'),
(76, 'languages', 'LaTex', '65', 9, '2018-06-30 19:45:10'),
(77, 'languages', 'Lisp', '15', 10, '2018-06-30 19:45:11'),
(78, 'languages', 'R', '35', 11, '2018-06-30 19:45:11'),
(79, 'tools', 'MatLab', '60', 15, '2018-06-30 19:45:11'),
(80, 'tools', 'Arduino', '80', 16, '2018-07-01 15:19:51'),
(81, 'languages', 'Objective-C', '45', 12, '2018-07-01 15:19:51'),
(82, 'domains', 'Image Processing', '30', 12, '2018-07-01 17:15:52'),
(83, 'domains', 'Robotics', '50', 13, '2018-07-01 17:22:37'),
(84, 'languages', 'FORTRAN', '20', 13, '2018-07-02 06:25:06'),
(85, 'languages', 'SED AWK', '65', 14, '2018-07-02 06:25:06'),
(86, 'frameworks', 'Swing', '55', 12, '2018-07-02 07:52:43'),
(87, 'domains', 'Data Structures', '80', 14, '2018-07-02 08:49:11'),
(88, 'domains', 'Algorithms', '75', 15, '2018-07-02 08:49:11'),
(89, 'domains', 'Neural Networks', '50', 16, '2018-07-02 08:49:12'),
(90, 'platforms', 'Web hosting', '85', 6, '2018-07-02 08:49:12'),
(91, 'domains', 'Artificial Intelligence', '55', 17, '2018-07-02 08:49:12'),
(92, 'domains', 'Information Retrieval', '60', 18, '2018-07-02 08:49:12'),
(93, 'domains', 'Data Mining', '60', 19, '2018-07-02 08:49:13');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
