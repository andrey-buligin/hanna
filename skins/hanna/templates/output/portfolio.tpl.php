<?php $this->displayHead(); ?>
    <body <?php echo $this->getBackgroundStyle()?>>
    	<header id="headerContainer">
    		<?php $this->displayHeader(); ?>
    		<nav>
        	    <?php WBG::module("top-navigation"); ?>
        	</nav>
    	</header>
    	<section id="content">
    		<?php WBG::content(); ?>
    	</section>
    	<footer id="footerContainer">
    		<?php $this->displayFooter(); ?>
    	</footer>
    </body>
</html>