-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 18, 2024 at 02:38 AM
-- Server version: 8.0.33
-- PHP Version: 8.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `img` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `uid` int DEFAULT NULL,
  `cat` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`, `img`, `date`, `uid`, `cat`) VALUES
(44, 'Introduction to AI', '<h3>Introduction</h3><p>Artificial Intelligence (AI) is transforming various industries. This blog explores its impacts and future potential.</p><h4>Impact of AI</h4><p><strong>Healthcare</strong>: AI is used in diagnostics and personalized treatment plans.</p><p><strong>Finance</strong>: AI helps in fraud detection and risk management.</p><p><strong>Transportation</strong>: Autonomous vehicles are a reality now.</p><p>AI technologies are also being integrated into customer service through chatbots and virtual assistants, enhancing user experience and operational efficiency. The development of AI continues to push the boundaries of what machines can do, making it a critical area of research and investment.</p>', '1715861236763milad-fakurian-58Z17lnVS4U-unsplash.jpg', '2024-05-16 10:28:09', 21, 'technology'),
(45, 'Blockchain Explained', '<h3>Understanding Blockchain</h3><p>Blockchain technology underpins cryptocurrencies and has numerous applications beyond finance.</p><h4>Key Applications</h4><p><strong>Supply Chain</strong>: Enhances transparency and efficiency.</p><p><strong>Healthcare</strong>: Secures patient data and facilitates information sharing.</p><p><strong>Finance</strong>: Increases security and reduces fraud in transactions.</p><p>In addition to these applications, blockchain is being explored for its potential to create decentralized autonomous organizations (DAOs) and smart contracts, which can automate and enforce agreements without intermediaries. This innovation is poised to revolutionize how businesses and governments operate, promoting trust and transparency.</p>', '1715860792555uriel-sc-11KDtiUWRq4-unsplash.jpg', '2024-05-16 10:28:09', 22, 'technology'),
(46, 'The Future of Quantum Computing', '<h3>Quantum Computing</h3><p>Quantum computing leverages quantum mechanics to solve complex problems faster than classical computers.</p><h4>Applications</h4><p><strong>Cryptography</strong>: Quantum computers can break traditional encryption methods.</p><p><strong>Medicine</strong>: Helps in drug discovery and modeling complex biological systems.</p><p><strong>Artificial Intelligence</strong>: Enhances machine learning algorithms.</p><p>Quantum computing promises to solve problems that are currently intractable for classical computers. Researchers are working on quantum algorithms that can tackle optimization problems, simulate molecular structures for new materials, and improve machine learning techniques, opening up new possibilities in various fields.</p>', '1715860533086joshua-sortino-LqKhnDzSF-8-unsplash.jpg', '2024-05-16 10:28:09', 23, 'technology'),
(47, 'Advancements in Renewable Energy', '<h3>Renewable Energy Sources</h3><p>Renewable energy is essential for a sustainable future. This blog discusses the latest advancements in the field.</p><h4>Technological Innovations</h4><p>Solar Power: Efficient solar panels and storage solutions.</p><p>Wind Energy: Advanced turbines and offshore wind farms.</p><p>Hydropower: Innovative approaches to harness water energy.</p><p>Moreover, advancements in energy storage technologies, such as battery storage systems, are crucial for the consistent and reliable use of renewable energy. Innovations in this area are making renewable energy more viable and widespread, helping to reduce carbon emissions and combat climate change.</p>', '17158361065678.jpg', '2024-05-16 10:28:09', 24, 'technology'),
(48, 'Cybersecurity in the Digital Age', '<h3>Importance of Cybersecurity</h3><p>As digital transformation accelerates, cybersecurity has become crucial to protect data and privacy.</p><h4>Best Practices</h4><p>Use strong passwords and multi-factor authentication.</p><p>Keep software updated to patch vulnerabilities.</p><p>Educate employees about phishing and other threats.</p><p>With the increase in cyber threats, businesses and individuals must adopt robust cybersecurity measures. This includes regular security audits, implementing encryption technologies, and creating incident response plans to quickly address any breaches. Staying informed about the latest security trends and threats is essential for protecting sensitive information in the digital age.</p>', '1715860199389nasa-Q1p7bh3SHj8-unsplash.jpg', '2024-05-16 10:28:12', 25, 'science'),
(56, 'Advancements in Renewable Energy', '<h3>Renewable Energy Sources</h3><p>Renewable energy is essential for a sustainable future. This blog discusses the latest advancements in the field.</p><h4>Technological Innovations</h4><p><strong>Solar Power</strong>: Efficient solar panels and storage solutions.</p><p><strong>Wind Energy</strong>: Advanced turbines and offshore wind farms.</p><p><strong>Hydropower</strong>: Innovative approaches to harness water energy.</p><p>Moreover, advancements in energy storage technologies, such as battery storage systems, are crucial for the consistent and reliable use of renewable energy. Innovations in this area are making renewable energy more viable and widespread, helping to reduce carbon emissions and combat climate change.</p>', '1715859986268alexandre-debieve-FO7JIlwjOtU-unsplash.jpg', '2024-05-16 16:48:45', 24, 'technology'),
(57, 'Cybersecurity in the Digital Age', '<h3>Importance of Cybersecurity</h3><p>As digital transformation accelerates, cybersecurity has become crucial to protect data and privacy.</p><h4>Best Practices</h4><p>Use strong passwords and multi-factor authentication.</p><p>Keep software updated to patch vulnerabilities.</p><p>Educate employees about phishing and other threats.</p><p>With the increase in cyber threats, businesses and individuals must adopt robust cybersecurity measures. This includes regular security audits, implementing encryption technologies, and creating incident response plans to quickly address any breaches. Staying informed about the latest security trends and threats is essential for protecting sensitive information in the digital age.</p>', '1715860225931fabio-oyXis2kALVg-unsplash.jpg', '2024-05-16 16:48:51', 25, 'technology'),
(59, 'The Beauty of Impressionist Art', '<h3>Exploring Impressionism</h3><p>Impressionism emerged as a revolutionary art movement in the late 19th century, challenging traditional painting techniques and perceptions of art.</p><h4>Characteristics of Impressionist Art</h4><p>Use of vibrant colors and visible brushstrokes.</p><p>Focus on capturing fleeting moments and natural light.</p><p>Preference for outdoor scenes and everyday life.</p><p>Impressionist artists like Claude Monet, Edgar Degas, and Pierre-Auguste Renoir paved the way for modern art movements and continue to inspire artists today.</p>', '1715860257077dan-farrell-fT49QnFucQ8-unsplash.jpg', '2024-05-16 16:50:12', 25, 'art'),
(60, 'The Wonders of Space Exploration', '<h3>Space Exploration: Journey Beyond Earth</h3><p>Humanity’s quest to explore the cosmos has led to remarkable discoveries and technological advancements.</p><h4>Key Milestones</h4><p>Moon Landing: Apollo 11 mission in 1969 marked the first human steps on the moon.</p><p>Mars Rovers: Robotic explorers like Curiosity and Perseverance are uncovering clues about Mars’ past and potential for life.</p><p>International Space Station: A collaborative effort for scientific research and international cooperation.</p><p>Space exploration continues to push the boundaries of human knowledge and inspire future generations to dream big and reach for the stars.</p>', '1715861310220moritz-kindler-G66K_ERZRhM-unsplash.jpg', '2024-05-16 16:51:36', 21, 'technology'),
(61, 'Evolution of Cinema: From Silent Films to CGI', '<h3>The Evolution of Cinema</h3><p>Cinema has undergone significant transformations over the decades, from silent black-and-white films to high-definition blockbusters with cutting-edge special effects.</p><h4>Technological Advances</h4><p><strong>Sound</strong>: Introduction of synchronized sound revolutionized the film industry.</p><p><strong>Color</strong>: Transition from black-and-white to color films enhanced visual storytelling.</p><p><strong>Computer Graphics</strong>: CGI has opened up endless possibilities for creating immersive worlds and fantastical creatures.</p><p>Despite these advancements, storytelling remains at the heart of cinema, captivating audiences and evoking emotions across cultures and generations.</p>', '1715860578726jakob-owens-CiUR8zISX60-unsplash.jpg', '2024-05-16 16:52:02', 23, 'cinema'),
(63, 'Design Thinking: Innovating for the Future', '<h3>The Power of Design Thinking</h3><p>Design thinking is a human-centered approach to innovation that emphasizes empathy, creativity, and collaboration.</p><h4>Core Principles</h4><p><strong>Empathize</strong>: Understand the needs and experiences of users.</p><p><strong>Define</strong>: Clearly articulate the problem to be solved.</p><p><strong>Ideate</strong>: Generate a wide range of ideas and solutions.</p><p><strong>Prototype</strong>: Create tangible representations of ideas to test and refine.</p><p><strong>Test</strong>: Gather feedback and iterate on solutions.</p><p>By following these principles, organizations can develop innovative solutions that meet the needs of their users and create value in new and unexpected ways.</p>', '1715861374186marten-bjork-6dW3xyQvcYE-unsplash.jpg', '2024-05-16 16:52:29', 21, 'business'),
(64, 'Exploring Culinary Delights: Food Adventures Around the World', '<h3>A Gastronomic Journey</h3><p>Food is a universal language that transcends borders and cultures, bringing people together and celebrating diversity.</p><h4>Culinary Traditions</h4><p><strong>Italian Cuisine</strong>: Indulge in savory pasta dishes and delectable pizzas.</p><p><strong>Japanese Cuisine</strong>: Experience the artistry of sushi and the comfort of ramen.</p><p><strong>Indian Cuisine</strong>: Delight your taste buds with aromatic spices and flavorful curries.</p><p>Exploring culinary traditions from around the world is a delightful adventure that enriches the palate and nourishes the soul.</p>', '1715860311188jimmy-dean-Yn0l7uwBrpw-unsplash.jpg', '2024-05-16 16:52:54', 25, 'food'),
(65, 'The Art of Japanese Calligraphy', '<h3>Introduction</h3><p>Japanese calligraphy, or shodo, is a traditional art form that combines beauty and precision.</p><h4>History and Techniques</h4><p>Shodo has its roots in Chinese calligraphy and evolved over centuries in Japan.</p><p>Key techniques include the use of brush strokes and ink to create expressive characters.</p><p>This art form is highly respected in Japanese culture and continues to be practiced by artists and enthusiasts worldwide.</p>', '1715861341336steve-johnson-3Sf_G9m0gcQ-unsplash.jpg', '2024-05-16 16:55:50', 21, 'art'),
(66, 'The Science Behind Renewable Energy', '<h3>Understanding Renewable Energy</h3><p>Renewable energy sources are essential for a sustainable future, reducing our dependence on fossil fuels.</p><h4>Types of Renewable Energy</h4><p><strong>Solar energy</strong>: Harnessing sunlight through solar panels.</p><p><strong>Wind energy</strong>: Utilizing wind turbines to generate electricity.</p><p><strong>Hydroelectric energy</strong>: Producing power from water flow.</p><p>These renewable sources are crucial for mitigating climate change and ensuring a greener future.</p>', '1715860862995ramon-salinero-vEE00Hx5d0Q-unsplash.jpg', '2024-05-16 16:55:50', 22, 'science'),
(67, 'The Evolution of Cinematic Techniques', '<h3>History of Film Techniques</h3><p>Cinematic techniques have evolved dramatically since the inception of film, enhancing storytelling and visual experience.</p><h4>Key Innovations</h4><p><strong>Silent films</strong>: Early cinema relied on visual storytelling without sound.</p><p><strong>Sound films</strong>: Introduction of synchronized sound revolutionized film.</p><p><strong>Special effects</strong>: Advances in CGI have expanded creative possibilities.</p><p>These techniques have shaped the film industry, allowing for more immersive and engaging stories.</p>', '1715860611199jeremy-yap-J39X2xX_8CQ-unsplash.jpg', '2024-05-16 16:55:50', 23, 'cinema'),
(68, 'Innovative Design in Urban Architecture', '<h3>Urban Design Innovations</h3><p>Urban architecture is evolving with innovative designs that prioritize sustainability and livability.</p><h4>Key Features</h4><p><strong>Green spaces</strong>: Incorporating parks and gardens into urban planning.</p><p><strong>Smart buildings</strong>: Using technology to enhance efficiency.</p><p><strong>Mixed-use developments</strong>: Combining residential, commercial, and recreational spaces.</p><p>These designs are transforming cities into more vibrant and sustainable environments.</p>', '1715860028794med-badr-chemmaoui-ZSPBhokqDMc-unsplash.jpg', '2024-05-16 16:55:50', 24, 'design'),
(69, 'Exploring Culinary Traditions Around the World', '<h3>Global Culinary Traditions</h3><p>The world is rich with diverse culinary traditions that reflect cultural heritage and history.</p><h4>Highlights</h4><p><strong>Italian cuisine</strong>: Known for pasta, pizza, and olive oil.</p><p><strong>Indian cuisine</strong>: Famous for its spices and diverse flavors.</p><p><strong>Japanese cuisine</strong>: Renowned for sushi, sashimi, and ramen.</p><p>Exploring these cuisines offers a taste of different cultures and their unique food traditions.</p>', '1715860351236davide-cantelli-jpkfc5_d-DI-unsplash.jpg', '2024-05-16 16:55:50', 25, 'food'),
(70, 'The Role of Art in Mental Health', '<h3>Art and Mental Health</h3><p>Art therapy is a powerful tool for improving mental health and emotional well-being.</p><h4>Benefits of Art Therapy</h4><p><strong>Expression</strong>: Provides a safe outlet for emotions.</p><p><strong>Relaxation</strong>: Reduces stress and anxiety.</p><p><strong>Self-discovery</strong>: Helps individuals understand themselves better.</p><p>Engaging in artistic activities can significantly enhance mental health and overall quality of life.</p>', '1715861382444alina-grubnyak-IsxaFsXi2rs-unsplash.jpg', '2024-05-16 16:55:50', 21, 'art'),
(71, 'Advancements in Medical Science', '<h3>Medical Science Innovations</h3><p>Recent advancements in medical science are revolutionizing healthcare and improving patient outcomes.</p><h4>Key Developments</h4><p><strong>Genomic medicine</strong>: Personalized treatments based on genetic information.</p><p><strong>Telemedicine</strong>: Remote diagnosis and treatment using technology.</p><p><strong>Regenerative medicine</strong>: Developing techniques to repair or replace damaged tissues.</p><p>These innovations are enhancing our ability to diagnose, treat, and prevent diseases.</p>', '1715860893990lucas-vasques-9vnACvX2748-unsplash.jpg', '2024-05-16 16:55:50', 22, 'science'),
(76, 'The Science of Climate Change', '<h3>Understanding Climate Change</h3><p>Climate change refers to long-term shifts in temperatures and weather patterns, mainly due to human activities.</p><h4>Causes and Effects</h4><p>Greenhouse gases: Emissions from burning fossil fuels trap heat in the atmosphere.</p><p>Melting ice caps: Rising temperatures cause polar ice to melt, leading to sea level rise.</p><p>These changes are impacting ecosystems, weather patterns, and human societies globally, making climate action critical.</p>', '1715860917709nasa-yZygONrUBe8-unsplash.jpg', '2024-04-22 00:00:00', 22, 'science'),
(77, 'The Golden Age of Hollywood', '<h3>Introduction to Hollywoods Golden Age</h3><p>The Golden Age of Hollywood, from the 1920s to the 1960s, was a period of significant cinematic achievements.</p><h4>Key Aspects</h4><p><strong>Studio system</strong>: Major studios controlled film production and distribution.</p><p><strong>Iconic films</strong>: Classics like Casablanca and The Wizard of Oz were produced.</p><p><strong>Stars</strong>: Legendary actors like Humphrey Bogart and Marilyn Monroe rose to fame.</p><p>This era set the standards for filmmaking and continues to influence the industry today.</p>', '1715860666101felix-mooneeram-evlkOfkQ5rE-unsplash.jpg', '2024-03-15 00:00:00', 23, 'cinema'),
(78, 'Innovations in Graphic Design', '<h3>Graphic Design Innovations</h3><p>Graphic design is constantly evolving with new technologies and <strong><em>trends </em></strong>shaping the industry.</p><h4>Recent Trends</h4><p><strong>Minimalism</strong>: Focus on simplicity and clean lines.</p><p><strong>3D design</strong>: Use of three-dimensional elements for depth and realism.</p><p><strong>Interactive design</strong>: Engaging users through interactive elements.</p><p>These innovations are pushing the boundaries of visual communication and user experience.</p>', '1715859919893med-badr-chemmaoui-ZSPBhokqDMc-unsplash.jpg', '2024-02-20 00:00:00', 24, 'design'),
(80, 'The Renaissance: A Rebirth of Art and Science', '<h3>The Renaissance Era</h3><p>The Renaissance was a period of great cultural and intellectual growth in Europe, spanning the 14th to 17th centuries.</p><h4>Key Contributions</h4><p>Art: Masters like Leonardo da Vinci and Michelangelo created iconic works.</p><p><strong>Science</strong>: Figures like Galileo and Copernicus advanced our understanding of the universe.</p><p><strong>Literature</strong>: Writers like Shakespeare produced timeless classics.</p><p>This period laid the foundations for modern art and science, influencing countless generations.</p>', '1715861455785steve-johnson-zkNT5mikUuo-unsplash.jpg', '2024-04-10 00:00:00', 21, 'art'),
(81, 'Exploring the Cosmos: Modern Astronomy', '<h3>Modern Astronomy</h3><p>Astronomy is the study of celestial objects and phenomena, revealing the mysteries of the universe.</p><h4>Key Discoveries</h4><p><strong>Exoplanets</strong>: Thousands of planets discovered outside our solar system.</p><p><strong>Black holes</strong>: Understanding the nature and behavior of black holes.</p><p><strong>Dark matter</strong>: Investigating the unseen matter that makes up most of the universe.</p><p>Modern astronomy combines advanced technology and scientific curiosity to explore the vastness of space.</p>', '1715860953427moritz-kindler-G66K_ERZRhM-unsplash.jpg', '2024-03-25 00:00:00', 22, 'science'),
(82, 'The Impact of Streaming Services on Cinema', '<h3>Streaming Services and Cinema</h3><p>Streaming services have transformed the way we consume media, impacting the cinema industry significantly.</p><h4>Key Changes</h4><p><strong>Accessibility</strong>: Movies and shows available on-demand.</p><p><strong>Production</strong>: Original content created by streaming platforms.</p><p><strong>Distribution</strong>: Changing how films are released and monetized.</p><p>These changes have led to a new era of entertainment, blending traditional cinema with digital innovation.</p>', '1715860699009gr-stocks-q8P8YoR6erg-unsplash.jpg', '2024-05-05 00:00:00', 23, 'cinema'),
(83, 'The Role of Color Theory in Design', '<h3>Color Theory in Design</h3><p>Color theory is a crucial aspect of design, influencing aesthetics and user experience.</p><h4>Principles</h4><p><strong>Color wheel</strong>: Understanding primary, secondary, and tertiary colors.</p><p><strong>Color harmony</strong>: Creating visually pleasing combinations.</p><p><strong>Psychology of color</strong>: Using colors to evoke emotions and reactions.</p><p>Applying color theory effectively can enhance the impact and functionality of design projects.</p>', '1715860116170clark-tibbs-oqStl2L5oxI-unsplash.jpg', '2024-02-15 00:00:00', 24, 'design'),
(84, 'The Art of Plating: Making Food Look Beautiful', '<h3>Plating Techniques</h3><p>Plating is the art of arranging food on a plate to enhance its visual appeal, adding to the overall dining experience.</p><h4>Key Techniques</h4><p><strong>Balance</strong>: Combining colors, textures, and shapes.</p><p><strong>Focus</strong>: Highlighting the main ingredient.</p><p><strong>Garnishes</strong>: Adding edible decorations for flair.</p><p>Effective plating can transform a meal into a work of art, making it more enjoyable and appetizing.</p>', '1715860416584brooke-lark-bMj7f6W9N9Q-unsplash.jpg', '2024-06-01 00:00:00', 25, 'food');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `img`) VALUES
(21, 'shubham', 'shubhamchat224122@gmail.com', '$2a$10$VkhiJNOd6gWO9GsSCaliS.Kt.YIpqWzHU8bV/NXgH3DkKv/yattYS', '1715833373622man3.png'),
(22, 'shivam', 'shivam@gmail.com', '$2a$10$frKZvbuK2iiLmRaQcQpQs./MKYvqtLxdJmzRCdYQPVKDvWzhDBTIu', '1715834506280man1.png'),
(23, 'vishal', 'vishal@gmail.com', '$2a$10$ppaAUCpsMo1UrYrSsf84S.UcRw19UHYfUnP/Ex94TptePgm5H4v7C', '1715834532184man4.png'),
(24, 'ankit', 'ankit@gmail.com', '$2a$10$T2X1cGh0LLasQPmbpnrFGudia9H.aEf4urKmWzabZrVhCdtKLxLY2', '1715834563104man2.png'),
(25, 'tajdar', 'tajdar@gmail.com', '$2a$10$XZtDqx3wkzo6AKbXfCTKkeFuvy8/oR9P9z3nGYrrSJTL5Ah1hTxRa', '1715834589195man.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
