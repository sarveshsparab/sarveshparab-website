<?php
ini_set('session.use_trans_sid', '0');
$char = strtoupper(substr(str_shuffle('abcdefghjkmnpqrstuvwxyz'), 0, 4));
$str = rand(1, 7) . rand(1, 7) . $char;
session_start();
$_SESSION['captcha_id'] = $str;
?>

<!-- Navigation menu -->
<ul class="sp-menu sp-menu-fixed sp-menu-response-to-icons sp-menu-anim-scale">
    <!-- Home -->
    <li>
        <a id="homeId" href="#"><i class="fa fa-home"></i>Home</a>
    </li>
    <!--/ Home -->

    <!-- Resume -->
    <li>
        <a id="resumeId" href="#"><i class="fa fa-print"></i>Resume<i class="fa fa-indicator fa-chevron-down"></i></a>
        <div class="grid-container2">
            <ul class="sp-menu sp-menu-response-to-icons">
                <li>
                    <a href="#"><i class="fa fa-lightbulb"></i>Experience</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-book"></i>Education</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-tasks"></i>Skills<i class="fa fa-indicator fa-chevron-right"></i></a>
                    <div class="grid-container2">
                        <ul class="sp-menu sp-menu-response-to-icons">
                            <li><a href="#"><i class="fa fa-globe"></i>Web</a></li>
                            <li><a href="#"><i class="fa fa-code"></i>Languages</a></li>
                            <li><a href="#"><i class="fab fa-connectdevelop"></i>Domains</a></li>
                            <li><a href="#"><i class="fa fa-database"></i>Databases</a></li>
                            <li><a href="#"><i class="fa fa-table"></i>Frameworks</a></li>
                            <li><a href="#"><i class="fa fa-cloud"></i>Platforms</a></li>
                            <li><a href="#"><i class="fa fa-wrench"></i>Tools</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </li>
    <!--/ Resume -->

    <!-- Projects -->
    <li>
        <a id="projectsId" href="#"><i class="fa fa-briefcase"></i>Projects</a>
    </li>
    <!--/ Projects -->

    <!-- Blogs -->
    <li>
        <a id="blogId" href="#"><i class="fa fa-edit"></i>Blog</a>
    </li>
    <!--/ Blogs -->

    <!-- Contact me -->
    <li class="right">
        <a id="contactMeId" href="#"><i class="fa fa-address-card"></i>Contact Me<i class="fa fa-indicator fa-chevron-down"></i></a>
        <div id="contactMeListdiv" class="grid-container4"></div>
    </li>
    <!--/ Contact me -->

    <!-- drop me a line -->
    <li id="dropLineId" aria-haspopup="true" class="right">
        <a href="#"><i class="fa fa-envelope"></i>Drop a line<i class="fa fa-indicator fa-chevron-down"></i></a>
        <div id="dropLineListdiv" class="grid-container8">
            <form action="php/dropLineEmail.php" method="post" id="dropLineForm" class="sp-form">
                <fieldset>
                    <div class="row">
                        <section class="col col-6">
                            <label class="label">Name</label>
                            <label class="input">
                                <i class="icon-append fa fa-user"></i>
                                <input type="text" name="name" id="name">
                            </label>
                        </section>
                        <section class="col col-6">
                            <label class="label">E-mail</label>
                            <label class="input">
                                <i class="icon-append fa fa-at"></i>
                                <input type="email" name="email" id="email">
                            </label>
                        </section>
                    </div>
                    <section>
                        <label class="label">Subject</label>
                        <label class="input">
                            <i class="icon-append fa fa-tag"></i>
                            <input type="text" name="subject" id="subject">
                        </label>
                    </section>
                    <section>
                        <label class="label">Message</label>
                        <label class="textarea">
                            <i class="icon-append fa fa-comment"></i>
                            <textarea rows="3" name="message" id="message"></textarea>
                        </label>
                    </section>
                    <section>
                        <label class="label">Enter characters below:</label>
                        <label class="input input-captcha">
                            <img src="../resources/captcha/image.php?<?php echo time(); ?>" width="100" height="35"
                                 alt="Captcha image"/>
                            <input type="text" maxlength="6" name="captcha" id="captcha">
                        </label>
                    </section>
                    <section>
                        <label class="toggleConfirm"><input type="checkbox" name="copy"><i></i>Send a copy to my e-mail address</label>
                    </section>
                    <button type="submit" class="button left">Send message</button>
                </fieldset>
                <div class="message">
                    <i id="refreshDropLineForm" title="Refresh" class="fa fa-sync-alt" style="text-align: right; margin: unset; border: unset; line-height: unset; height: unset; width: unset; font-size: 15px"></i>
                    <i class="fa fa-check"></i>
                    <p>Your message was successfully sent!</p>
                </div>
            </form>
        </div>
    </li>
    <!--/ drop me a line -->
</ul>
<!--/ Navigation menu -->
<script src="../js/scripts/dropLineValidation.js"></script>