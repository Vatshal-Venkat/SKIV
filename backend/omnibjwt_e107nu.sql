-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 18, 2026 at 04:24 PM
-- Server version: 5.7.23-23
-- PHP Version: 8.1.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `omnibjwt_e107nu`
--

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_admin_log`
--

CREATE TABLE `e107nu_admin_log` (
  `dblog_id` int(10) UNSIGNED NOT NULL,
  `dblog_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `dblog_microtime` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `dblog_type` tinyint(3) NOT NULL DEFAULT '0',
  `dblog_eventcode` varchar(10) NOT NULL DEFAULT '',
  `dblog_user_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `dblog_ip` varchar(45) NOT NULL DEFAULT '',
  `dblog_title` varchar(255) NOT NULL DEFAULT '',
  `dblog_remarks` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_admin_log`
--

INSERT INTO `e107nu_admin_log` (`dblog_id`, `dblog_datestamp`, `dblog_microtime`, `dblog_type`, `dblog_eventcode`, `dblog_user_id`, `dblog_ip`, `dblog_title`, `dblog_remarks`) VALUES
(1, 1618643278, 587752, 0, 'PREFS_01', 0, '0000:0000:0000:0000:0000:ffff:b753:8692', 'LAN_AL_PREFS_01', 'Your settings have been saved - Success[!br!]Array[!br!]([!br!]    [0] =&gt; Array[!br!]        ([!br!]            [file] =&gt; /home/omnibjwt/public_html/aikyanew/e107_handlers/online_class.php[!br!]            [line] =&gt; 390[!br!]            [function] =&gt; save[!br!]            [class] =&gt; e_pref[!br!]            [type] =&gt; -&gt;[!br!]            [args] =&gt; Array[!br!]                ([!br!]                    [0] =&gt; [!br!]                    [1] =&gt; 1[!br!]                    [2] =&gt; [!br!]                )[!br!][!br!]        )[!br!][!br!]    [1] =&gt; Array[!br!]        ([!br!]            [file] =&gt; /home/omnibjwt/public_html/aikyanew/class2.php[!br!]            [line] =&gt; 2227[!br!]            [function] =&gt; goOnline[!br!]            [class] =&gt; e_online[!br!]            [type] =&gt; -&gt;[!br!]            [args] =&gt; Array[!br!]                ([!br!]                    [0] =&gt; 1[!br!]                    [1] =&gt; 1[!br!]                )[!br!][!br!]        )[!br!][!br!])[!br!]'),
(2, 1618643321, 433021, 0, 'PREFS_01', 1, '0000:0000:0000:0000:0000:ffff:b753:8692', 'LAN_AL_PREFS_01', 'Array[!br!]([!br!]    [version] =&gt; 2.3.0[!br!])[!br!][!br!]Backup of core (SitePrefs) successfully created. - Success[!br!]Your settings have been saved - Success'),
(3, 1618643324, 187461, 0, 'PREFS_01', 1, '0000:0000:0000:0000:0000:ffff:b753:8692', 'LAN_AL_PREFS_01', 'Array[!br!]([!br!]    [db_updates] =&gt; Array[!br!]        ([!br!]            [706_to_800] =&gt; 1[!br!]        )[!br!][!br!])[!br!][!br!]Backup of core (SitePrefs) successfully created. - Success[!br!]Your settings have been saved - Success'),
(4, 1618643375, 866259, 0, 'PREFS_01', 1, '0000:0000:0000:0000:0000:ffff:b753:8692', 'LAN_AL_PREFS_01', 'No differences found[!br!]Backup of core (SitePrefs) successfully created. - Success[!br!]Your settings have been saved - Success'),
(5, 1618643379, 529321, 0, 'PREFS_01', 1, '0000:0000:0000:0000:0000:ffff:b753:8692', 'LAN_AL_PREFS_01', 'Array[!br!]([!br!]    [menuconfig_list] =&gt; Array[!br!]        ([!br!]            [news] =&gt; Array[!br!]                ([!br!]                    [name] =&gt; Othernews2:Newsmonths:Latestnews[!br!]                )[!br!][!br!]        )[!br!][!br!])[!br!][!br!]Backup of core (SitePrefs) successfully created. - Success[!br!]Your settings have been saved - Success');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_audit_log`
--

CREATE TABLE `e107nu_audit_log` (
  `dblog_id` int(10) UNSIGNED NOT NULL,
  `dblog_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `dblog_microtime` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `dblog_eventcode` varchar(10) NOT NULL DEFAULT '',
  `dblog_user_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `dblog_user_name` varchar(100) NOT NULL DEFAULT '',
  `dblog_ip` varchar(45) NOT NULL DEFAULT '',
  `dblog_title` varchar(255) NOT NULL DEFAULT '',
  `dblog_remarks` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_banlist`
--

CREATE TABLE `e107nu_banlist` (
  `banlist_id` int(10) UNSIGNED NOT NULL,
  `banlist_ip` varchar(100) NOT NULL DEFAULT '',
  `banlist_bantype` tinyint(3) NOT NULL DEFAULT '0',
  `banlist_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `banlist_banexpires` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `banlist_admin` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `banlist_reason` tinytext NOT NULL,
  `banlist_notes` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_comments`
--

CREATE TABLE `e107nu_comments` (
  `comment_id` int(10) UNSIGNED NOT NULL,
  `comment_pid` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `comment_item_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `comment_subject` varchar(100) NOT NULL DEFAULT '',
  `comment_author_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `comment_author_name` varchar(100) NOT NULL DEFAULT '',
  `comment_author_email` varchar(200) NOT NULL DEFAULT '',
  `comment_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `comment_comment` text NOT NULL,
  `comment_blocked` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `comment_ip` varchar(45) NOT NULL DEFAULT '',
  `comment_type` varchar(20) NOT NULL DEFAULT '0',
  `comment_lock` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `comment_share` tinyint(1) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_core`
--

CREATE TABLE `e107nu_core` (
  `e107_name` varchar(100) NOT NULL DEFAULT '',
  `e107_value` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_core`
--

INSERT INTO `e107nu_core` (`e107_name`, `e107_value`) VALUES
('SitePrefs', 'array (\n  \'admin_alerts_ok\' => \'1\',\n  \'admin_alerts_uniquemenu\' => \'0\',\n  \'admin_separate_plugins\' => \'0\',\n  \'admincode\' => \'0\',\n  \'admincss\' => \'css/bootstrap-dark.min.css\',\n  \'adminlanguage\' => \'\',\n  \'adminpwordchange\' => \'0\',\n  \'adminstyle\' => \'flexpanel\',\n  \'admintheme\' => \'bootstrap3\',\n  \'allowCommentEdit\' => \'0\',\n  \'allowEmailLogin\' => \'2\',\n  \'anon_post\' => \'0\',\n  \'antiflood1\' => \'1\',\n  \'antiflood_timeout\' => \'10\',\n  \'auth_method\' => \'\',\n  \'autoban\' => \'1\',\n  \'autologinpostsignup\' => \'1\',\n  \'ban_date_format\' => \'%H:%M %d-%m-%y\',\n  \'ban_max_online_access\' => \'100,200\',\n  \'ban_retrigger\' => \'0\',\n  \'cachestatus\' => \'\',\n  \'check_updates\' => \'1\',\n  \'comments_disabled\' => \'0\',\n  \'comments_emoticons\' => \'0\',\n  \'comments_engine\' => \'e107\',\n  \'comments_icon\' => \'0\',\n  \'comments_moderate\' => \'247\',\n  \'comments_sort\' => \'desc\',\n  \'compress_output\' => \'0\',\n  \'contact_emailcopy\' => \'0\',\n  \'contact_visibility\' => \'0\',\n  \'contact_filter\' => \'\',\n  \'cookie_name\' => \'soft_cookie\',\n  \'core-infopanel-default\' => \n  array (\n    0 => \'e-administrator\',\n    1 => \'e-cpage\',\n    2 => \'e-filemanager\',\n    3 => \'e-frontpage\',\n    4 => \'e-image\',\n    5 => \'e-mailout\',\n    6 => \'e-menus\',\n    7 => \'e-meta\',\n    8 => \'e-newspost\',\n    9 => \'e-plugin\',\n    10 => \'e-prefs\',\n    11 => \'e-links\',\n    12 => \'e-theme\',\n    13 => \'e-userclass2\',\n    14 => \'e-users\',\n    15 => \'e-wmessage\',\n  ),\n  \'db_updates\' => \n  array (\n  ),\n  \'developer\' => \'0\',\n  \'disable_emailcheck\' => \'0\',\n  \'disallowMultiLogin\' => \'0\',\n  \'display_memory_usage\' => \'0\',\n  \'displayname_class\' => \'255\',\n  \'displayname_maxlength\' => \'20\',\n  \'displayrendertime\' => \'0\',\n  \'displaysql\' => \'0\',\n  \'displaythemeinfo\' => \'1\',\n  \'e_admin_list\' => \n  array (\n    \'social\' => \'social\',\n  ),\n  \'e_comment_list\' => \n  array (\n    \'social\' => \'social\',\n  ),\n  \'e_event_list\' => \n  array (\n    \'news\' => \'news\',\n    \'social\' => \'social\',\n  ),\n  \'e_featurebox_list\' => \n  array (\n    \'news\' => \'news\',\n  ),\n  \'e_footer_list\' => \n  array (\n    \'tinymce4\' => \'tinymce4\',\n  ),\n  \'e_header_list\' => \n  array (\n    \'news\' => \'news\',\n    \'tinymce4\' => \'tinymce4\',\n  ),\n  \'e_jslib_cdn\' => \'1\',\n  \'e_jslib_cdn_provider\' => \'jsdelivr\',\n  \'e_jslib_browser_cache\' => \'0\',\n  \'e_jslib_nobcache\' => \'1\',\n  \'e_jslib_nocache\' => \'1\',\n  \'e_jslib_gzip\' => \'1\',\n  \'e_jslib_nocombine\' => \'1\',\n  \'e_jslib_core\' => \n  array (\n    \'prototype\' => \'none\',\n    \'jquery\' => \'all\',\n  ),\n  \'e_jslib_plugin\' => \n  array (\n  ),\n  \'e_jslib_theme\' => \n  array (\n  ),\n  \'e_meta_list\' => \n  array (\n    \'rss_menu\' => \'rss_menu\',\n  ),\n  \'e_module_list\' => \n  array (\n    \'social\' => \'social\',\n  ),\n  \'e_related_list\' => \n  array (\n    \'news\' => \'news\',\n    \'page\' => \'page\',\n  ),\n  \'e_rss_list\' => \n  array (\n    \'news\' => \'news\',\n  ),\n  \'e_search_list\' => \n  array (\n    \'news\' => \'news\',\n    \'page\' => \'page\',\n    \'user\' => \'user\',\n  ),\n  \'e_shortcode_list\' => \n  array (\n    \'page\' => \'page\',\n    \'siteinfo\' => \'siteinfo\',\n    \'social\' => \'social\',\n  ),\n  \'shortcode_list\' => \n  array (\n  ),\n  \'e_sitelink_list\' => \n  array (\n    \'news\' => \'news\',\n    \'page\' => \'page\',\n  ),\n  \'e_sql_list\' => \n  array (\n    \'rss_menu\' => \'rss_sql\',\n  ),\n  \'e_url_list\' => \n  array (\n    \'contact\' => \'contact\',\n    \'news\' => \'news\',\n    \'rss_menu\' => \'rss_menu\',\n  ),\n  \'e_user_list\' => \n  array (\n    \'user\' => \'user\',\n  ),\n  \'email_text\' => \'\',\n  \'email_item_class\' => \'253\',\n  \'emotepack\' => \'default\',\n  \'enable_rdns\' => \'0\',\n  \'enable_rdns_on_ban\' => \'0\',\n  \'failed_login_limit\' => \'10\',\n  \'filter_script\' => \'1\',\n  \'flood_hits\' => \'100\',\n  \'flood_time\' => \'30\',\n  \'flood_timeout\' => \'5\',\n  \'forumdate\' => \'%a %b %d %Y, %I:%M%p\',\n  \'fpwcode\' => \'0\',\n  \'frontpage\' => \n  array (\n    0 => \'news.php\',\n  ),\n  \'frontpage_force\' => \n  array (\n    0 => \'\',\n  ),\n  \'gdpr_privacypolicy\' => \'\',\n  \'gdpr_termsandconditions\' => \'\',\n  \'html_abuse\' => \'1\',\n  \'im_height\' => \'80\',\n  \'im_path\' => \'/usr/X11R6/bin/\',\n  \'im_width\' => \'80\',\n  \'image_post\' => \'1\',\n  \'image_post_class\' => \'0\',\n  \'image_preload\' => \'0\',\n  \'img_import_resize\' => \'1200x800\',\n  \'inline_editing\' => \'255\',\n  \'inputdate\' => \'%A, %d %b, %Y\',\n  \'inputtime\' => \'%I:%M %p\',\n  \'install_date\' => 1618643230,\n  \'lan_global_list\' => \n  array (\n    \'page\' => \'page\',\n    \'social\' => \'social\',\n    \'rss_menu\' => \'rss_menu\',\n    \'user\' => \'user\',\n  ),\n  \'link_replace\' => \'0\',\n  \'link_text\' => \'\',\n  \'linkpage_screentip\' => \'0\',\n  \'links_new_window\' => \'1\',\n  \'log_page_accesses\' => \'0\',\n  \'log_refertype\' => \'1\',\n  \'logcode\' => \'0\',\n  \'loginname_maxlength\' => \'30\',\n  \'longdate\' => \'%A %d %B %Y - %H:%M:%S\',\n  \'mail_pause\' => \'3\',\n  \'mail_bounce\' => \'none\',\n  \'mail_pausetime\' => \'4\',\n  \'mail_sendstyle\' => \'texthtml\',\n  \'mail_workpertick\' => \'5\',\n  \'mailer\' => \'php\',\n  \'bulkmailer\' => \'smtp\',\n  \'main_wordwrap\' => \'\',\n  \'maintainance_flag\' => \'0\',\n  \'make_clickable\' => \'0\',\n  \'memberlist_access\' => \'253\',\n  \'membersonly_enabled\' => \'0\',\n  \'membersonly_exceptions\' => \n  array (\n    0 => \'\',\n  ),\n  \'menu_wordwrap\' => \'0\',\n  \'menuconfig_list\' => \n  array (\n    \'news\' => \n    array (\n      \'name\' => \'Othernews2:Newsmonths:Latestnews\',\n      \'link\' => \'blogcalendar_menu/config.php\',\n    ),\n  ),\n  \'membersonly_redirect\' => \'login\',\n  \'meta_tag\' => \'\',\n  \'multilanguage\' => \'0\',\n  \'nbr_cols\' => \'1\',\n  \'nested_comments\' => \'1\',\n  \'news_cats\' => \'\',\n  \'news_default_template\' => \'default\',\n  \'news_list_limit\' => \'10\',\n  \'news_newdateheader\' => \'0\',\n  \'newsposts\' => \'3\',\n  \'newsposts_archive\' => \'0\',\n  \'newsposts_archive_title\' => \'\',\n  \'noLanguageSubs\' => \'0\',\n  \'null\' => \'\',\n  \'old_np\' => \'0\',\n  \'pageCookieExpire\' => \'84600\',\n  \'passwordEncoding\' => 3,\n  \'password_CHAP\' => \'0\',\n  \'plug_installed\' => \n  array (\n    \'news\' => \'1.0\',\n    \'page\' => \'1.0\',\n    \'siteinfo\' => \'1.0\',\n    \'social\' => \'1.0\',\n    \'tinymce4\' => \'1.0\',\n    \'rss_menu\' => \'1.3\',\n    \'contact\' => \'1.0\',\n    \'user\' => \'1.0\',\n  ),\n  \'post_html\' => \'254\',\n  \'post_script\' => \'255\',\n  \'predefinedLoginName\' => \'\',\n  \'profanity_filter\' => \'0\',\n  \'profanity_replace\' => \'[censored]\',\n  \'profanity_words\' => \'\',\n  \'redirectsiteurl\' => \'0\',\n  \'replyto_email\' => \'naraharinath@hotmail.com\',\n  \'replyto_name\' => \'Administrator\',\n  \'resize_method\' => \'gd2\',\n  \'resize_dimensions\' => \n  array (\n    \'news-image\' => \n    array (\n      \'w\' => \'300\',\n      \'h\' => \'300\',\n    ),\n    \'news-bbcode\' => \n    array (\n      \'w\' => \'300\',\n      \'h\' => \'300\',\n    ),\n    \'page-bbcode\' => \n    array (\n      \'w\' => \'300\',\n      \'h\' => \'300\',\n    ),\n  ),\n  \'search_highlight\' => \'1\',\n  \'search_restrict\' => \'0\',\n  \'session_lifetime\' => \'86400\',\n  \'session_save_method\' => \'db\',\n  \'shortdate\' => \'%d %b %Y\',\n  \'signcode\' => \'0\',\n  \'signup_disallow_text\' => \'\',\n  \'signup_maxip\' => \'3\',\n  \'signup_option_class\' => \'1\',\n  \'signup_option_customtitle\' => \'0\',\n  \'signup_option_email_confirm\' => \'0\',\n  \'signup_option_hideemail\' => \'0\',\n  \'signup_option_image\' => \'0\',\n  \'signup_option_password\' => \'2\',\n  \'signup_option_realname\' => \'0\',\n  \'signup_option_signature\' => \'0\',\n  \'signup_pass_len\' => \'6\',\n  \'signup_text\' => \'\',\n  \'signup_text_after\' => \'\',\n  \'siteadmin\' => \'Administrator\',\n  \'siteadminemail\' => \'naraharinath@hotmail.com\',\n  \'sitebutton\' => \'{e_IMAGE}button.png\',\n  \'sitecontactinfo\' => \'[b]My Company[/b]\n13 My Address St.\nCity, State, Country\n[b]Phone:[/b] 555-555-5555\n[b]Email:[/b] sales@mydomain.com\',\n  \'sitecontacts\' => \'255\',\n  \'sitedescription\' => \'\',\n  \'sitedisclaimer\' => \'\',\n  \'sitelang_init\' => \'English\',\n  \'sitelanguage\' => \'English\',\n  \'sitelogo\' => \'{e_THEME}voux/install/logo2B252832529.png\',\n  \'sitename\' => \'My Website\',\n  \'sitetag\' => \'e107 Website System\',\n  \'sitetheme\' => \'voux\',\n  \'sitetheme_custompages\' => \n  array (\n    \'jumbotron_full\' => \n    array (\n      0 => \'forum\',\n    ),\n    \'jumbotron_sidebar_right\' => \n    array (\n      0 => \'/news\',\n    ),\n  ),\n  \'sitetheme_deflayout\' => \'jumbotron_sidebar_right\',\n  \'sitetheme_layouts\' => \n  array (\n    \'jumbotron_home\' => \n    array (\n      \'@attributes\' => \n      array (\n        \'title\' => \'Jumbotron (home)\',\n        \'default\' => \'false\',\n      ),\n      \'@value\' => \'\',\n    ),\n    \'modern_business_home\' => \n    array (\n      \'@attributes\' => \n      array (\n        \'title\' => \'Modern Business: Home page carousel with fixed custom-menus\',\n      ),\n      \'@value\' => \'\',\n    ),\n    \'jumbotron_full\' => \n    array (\n      \'@attributes\' => \n      array (\n        \'title\' => \'Jumbotron (full-width)\',\n      ),\n      \'custompages\' => \'forum\',\n    ),\n    \'jumbotron_sidebar_right\' => \n    array (\n      \'@attributes\' => \n      array (\n        \'title\' => \'Jumbotron (sidebar-right)\',\n        \'default\' => \'true\',\n      ),\n      \'custompages\' => \'/news\',\n      \'menuPresets\' => \n      array (\n        \'area\' => \n        array (\n          0 => \n          array (\n            \'@attributes\' => \n            array (\n              \'id\' => \'1\',\n            ),\n            \'menu\' => \n            array (\n              0 => \n              array (\n                \'@attributes\' => \n                array (\n                  \'name\' => \'search\',\n                ),\n                \'@value\' => \'\',\n              ),\n              1 => \n              array (\n                \'@attributes\' => \n                array (\n                  \'name\' => \'news_categories\',\n                ),\n                \'@value\' => \'\',\n              ),\n              2 => \n              array (\n                \'@attributes\' => \n                array (\n                  \'name\' => \'other_news\',\n                ),\n                \'@value\' => \'\',\n              ),\n              3 => \n              array (\n                \'@attributes\' => \n                array (\n                  \'name\' => \'other_news2\',\n                ),\n                \'@value\' => \'\',\n              ),\n              4 => \n              array (\n                \'@attributes\' => \n                array (\n                  \'name\' => \'blogcalendar\',\n                ),\n                \'@value\' => \'\',\n              ),\n            ),\n          ),\n        ),\n      ),\n    ),\n  ),\n  \'sitetheme_pref\' => \'\',\n  \'siteurl\' => \'/aikyanew/\',\n  \'smiley_activate\' => \'1\',\n  \'smtp_server\' => \'\',\n  \'smtp_username\' => \'\',\n  \'smtp_password\' => \'\',\n  \'smtp_options\' => \'\',\n  \'smtp_port\' => \'25\',\n  \'social_login_active\' => \'0\',\n  \'social_login\' => \'array()\',\n  \'ssl_enabled\' => \'0\',\n  \'subnews_attach\' => \'253\',\n  \'subnews_class\' => \'253\',\n  \'subnews_htmlarea\' => \'0\',\n  \'subnews_resize\' => \'\',\n  \'themecss\' => \'style.css\',\n  \'thumbnail_quality\' => \'75\',\n  \'timezone\' => \'UTC\',\n  \'track_online\' => \'1\',\n  \'ue_upgrade\' => \'1\',\n  \'upload_class\' => \'255\',\n  \'upload_enabled\' => \'0\',\n  \'upload_maxfilesize\' => \'2M\',\n  \'url_aliases\' => \n  array (\n  ),\n  \'url_config\' => \n  array (\n    \'index\' => \'core\',\n    \'news\' => \'core\',\n    \'page\' => \'core\',\n    \'search\' => \'core\',\n    \'system\' => \'core\',\n    \'user\' => \'core\',\n  ),\n  \'url_profiles\' => \n  array (\n  ),\n  \'url_disable_pathinfo\' => \'1\',\n  \'url_error_redirect\' => \'0\',\n  \'url_locations\' => \n  array (\n    \'index\' => \n    array (\n      0 => \'core\',\n    ),\n    \'news\' => \n    array (\n      0 => \'core\',\n      1 => \'core/sef\',\n      2 => \'core/sef_full\',\n      3 => \'core/sef_noid\',\n    ),\n    \'page\' => \n    array (\n      0 => \'core\',\n      1 => \'core/sef_chapters\',\n      2 => \'core/sef\',\n      3 => \'core/sef_noid\',\n    ),\n    \'search\' => \n    array (\n      0 => \'core\',\n      1 => \'core/rewrite\',\n    ),\n    \'system\' => \n    array (\n      0 => \'core\',\n      1 => \'core/rewrite\',\n    ),\n    \'user\' => \n    array (\n      0 => \'core\',\n      1 => \'core/rewrite\',\n    ),\n  ),\n  \'url_main_module\' => \'page\',\n  \'url_modules\' => \n  array (\n    \'core\' => \n    array (\n      0 => \'index\',\n      1 => \'news\',\n      2 => \'page\',\n      3 => \'search\',\n      4 => \'system\',\n      5 => \'user\',\n    ),\n    \'plugin\' => \n    array (\n    ),\n    \'override\' => \n    array (\n    ),\n  ),\n  \'url_sef_translate\' => \'dashl\',\n  \'useGeshi\' => \'0\',\n  \'use_coppa\' => \'1\',\n  \'user_new_period\' => \'3\',\n  \'user_reg\' => \'1\',\n  \'user_reg_secureveri\' => \'1\',\n  \'user_reg_veri\' => \'1\',\n  \'user_tracking\' => \'session\',\n  \'version\' => \'2.3.0\',\n  \'wm_enclose\' => \'1\',\n  \'wmessage_sc\' => \'0\',\n  \'wysiwyg\' => \'1\',\n  \'xup_enabled\' => \'1\',\n  \'xurl\' => \n  array (\n    \'facebook\' => \'http://facebook.com/themexpose\',\n    \'twitter\' => \'#\',\n    \'youtube\' => \'#\',\n    \'google\' => \'\',\n    \'linkedin\' => \'\',\n    \'github\' => \'\',\n    \'flickr\' => \'\',\n    \'instagram\' => \'#\',\n    \'pinterest\' => \'#\',\n    \'vimeo\' => \'\',\n  ),\n  \'xmlfeed_languagepacks\' => \'http://www.e107.org/themeupdate.php\',\n  \'xmlfeed_security\' => \'http://www.e107.org/themeupdate.php\',\n  \'avatar_upload\' => \'0\',\n  \'photo_upload\' => \'0\',\n  \'profile_rate\' => \'0\',\n  \'profile_comments\' => \'0\',\n  \'force_userupdate\' => \'0\',\n  \'del_unv\' => \'0\',\n  \'del_accu\' => \'1\',\n  \'signature_access\' => \'253\',\n  \'bbcode_list\' => \n  array (\n  ),\n  \'shortcode_legacy_list\' => \n  array (\n  ),\n  \'e_frontpage_list\' => \n  array (\n    \'news\' => \'news\',\n    \'page\' => \'page\',\n  ),\n  \'e_menu_list\' => \n  array (\n    \'news\' => \'news\',\n    \'page\' => \'page\',\n  ),\n  \'e_gsitemap_list\' => \n  array (\n    \'news\' => \'news\',\n  ),\n  \'e_dashboard_list\' => \n  array (\n    \'user\' => \'user\',\n  ),\n  \'e_mailout_list\' => \n  array (\n    \'user\' => \'user\',\n  ),\n  \'fb_active\' => \'1\',\n  \'sitetheme_version\' => \'1.0\',\n  \'sitetheme_glyphicons\' => \n  array (\n  ),\n)'),
('emote_', 'array (\n  \'alien!png\' => \'!alien\',\n  \'amazed!png\' => \'!amazed\',\n  \'angry!png\' => \'!grr !angry\',\n  \'biglaugh!png\' => \'!lol\',\n  \'cheesey!png\' => \':D :oD :-D\',\n  \'confused!png\' => \':? :o? :-?\',\n  \'cry!png\' => \'&| &-| &o| :(( !cry\',\n  \'dead!png\' => \'x) xo) x-) x( xo( x-(\',\n  \'dodge!png\' => \'!dodge\',\n  \'frown!png\' => \':( :o( :-(\',\n  \'gah!png\' => \':@ :o@ :o@\',\n  \'grin!png\' => \':D :oD :-D\',\n  \'heart!png\' => \'!heart\',\n  \'idea!png\' => \':! :o! :-!\',\n  \'ill!png\' => \'!ill\',\n  \'mad!png\' => \'~:( ~:o( ~:-(\',\n  \'mistrust!png\' => \'!mistrust\',\n  \'neutral!png\' => \':| :o| :-|\',\n  \'question!png\' => \'?!\',\n  \'rolleyes!png\' => \'B) Bo) B-)\',\n  \'sad!png\' => \'!sad\',\n  \'shades!png\' => \'8) 8o) 8-)\',\n  \'shy!png\' => \'!shy\',\n  \'smile!png\' => \':) :o) :-)\',\n  \'special!png\' => \'%-6\',\n  \'suprised!png\' => \':O :oO :-O\',\n  \'tongue!png\' => \':p :op :-p :P :oP :-P\',\n  \'wink!png\' => \';) ;o) ;-)\',\n)'),
('menu_pref', 'array (\n  \'clock_caption\' => \'Date / Time\',\n  \'comment_caption\' => \'Latest Comments\',\n  \'comment_characters\' => \'50\',\n  \'comment_display\' => \'10\',\n  \'comment_postfix\' => \'[more ...]\',\n  \'comment_title\' => \'0\',\n  \'forum_no_characters\' => \'20\',\n  \'forum_postfix\' => \'[more ...]\',\n  \'forum_show_topics\' => \'1\',\n  \'newforumposts_caption\' => \'Latest Forum Posts\',\n  \'newforumposts_characters\' => \'50\',\n  \'newforumposts_display\' => \'10\',\n  \'newforumposts_postfix\' => \'[more ...]\',\n  \'newforumposts_title\' => \'0\',\n  \'update_menu\' => \'Update menu Settings\',\n)'),
('search_prefs', 'array (\n  \'comments_handlers\' => \n  array (\n    \'news\' => \n    array (\n      \'id\' => 0,\n      \'dir\' => \'core\',\n      \'class\' => \'0\',\n    ),\n    \'download\' => \n    array (\n      \'id\' => 2,\n      \'dir\' => \'core\',\n      \'class\' => \'0\',\n    ),\n  ),\n  \'core_handlers\' => \n  array (\n    \'comments\' => \n    array (\n      \'class\' => \'0\',\n      \'pre_title\' => \'1\',\n      \'pre_title_alt\' => \'\',\n      \'chars\' => \'150\',\n      \'results\' => \'10\',\n      \'order\' => \'2\',\n    ),\n    \'users\' => \n    array (\n      \'class\' => \'0\',\n      \'pre_title\' => \'1\',\n      \'pre_title_alt\' => \'\',\n      \'chars\' => \'150\',\n      \'results\' => \'10\',\n      \'order\' => \'3\',\n    ),\n  ),\n  \'google\' => \'0\',\n  \'multisearch\' => \'1\',\n  \'mysql_sort\' => \'1\',\n  \'php_limit\' => \'\',\n  \'relevance\' => \'0\',\n  \'selector\' => \'2\',\n  \'time_restrict\' => \'0\',\n  \'time_secs\' => \'60\',\n  \'user_select\' => \'1\',\n)'),
('notify_prefs', 'array (\n  \'event\' => \n  array (\n    \'login\' => \n    array (\n      \'class\' => \'255\',\n      \'email\' => \'\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'logout\' => \n    array (\n      \'class\' => \'255\',\n      \'email\' => \'\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'user_signup_submitted\' => \n    array (\n      \'class\' => \'255\',\n      \'email\' => \'\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'user_signup_activated\' => \n    array (\n      \'class\' => \'255\',\n      \'email\' => \'\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'user_ban_flood\' => \n    array (\n      \'class\' => \'255\',\n      \'email\' => \'\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'user_news_submit\' => \n    array (\n      \'class\' => \'255\',\n      \'email\' => \'\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'admin_news_created\' => \n    array (\n      \'class\' => \'255\',\n      \'email\' => \'\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'admin_news_updated\' => \n    array (\n      \'class\' => \'255\',\n      \'email\' => \'\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'admin_news_deleted\' => \n    array (\n      \'class\' => \'255\',\n      \'email\' => \'\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'user_xup_login\' => \n    array (\n      \'class\' => \'255\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'user_xup_signup\' => \n    array (\n      \'class\' => \'255\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'user_ban_failed_login\' => \n    array (\n      \'class\' => \'255\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'user_profile_display\' => \n    array (\n      \'class\' => \'255\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'admin_password_update\' => \n    array (\n      \'class\' => \'255\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'admin_user_created\' => \n    array (\n      \'class\' => \'255\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'admin_user_activated\' => \n    array (\n      \'class\' => \'255\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'admin_news_notify\' => \n    array (\n      \'class\' => \'255\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'maildone\' => \n    array (\n      \'class\' => \'255\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n    \'user_file_upload\' => \n    array (\n      \'class\' => \'255\',\n      \'include\' => \'\',\n      \'legacy\' => \'0\',\n    ),\n  ),\n)'),
('SitePrefs_Backup', 'array (\n  \'admin_alerts_ok\' => \'1\',\n  \'admin_alerts_uniquemenu\' => \'0\',\n  \'admin_separate_plugins\' => \'0\',\n  \'admincode\' => \'0\',\n  \'admincss\' => \'css/bootstrap-dark.min.css\',\n  \'adminlanguage\' => \'\',\n  \'adminpwordchange\' => \'0\',\n  \'adminstyle\' => \'flexpanel\',\n  \'admintheme\' => \'bootstrap3\',\n  \'allowCommentEdit\' => \'0\',\n  \'allowEmailLogin\' => \'2\',\n  \'anon_post\' => \'0\',\n  \'antiflood1\' => \'1\',\n  \'antiflood_timeout\' => \'10\',\n  \'auth_method\' => \'\',\n  \'autoban\' => \'1\',\n  \'autologinpostsignup\' => \'1\',\n  \'ban_date_format\' => \'%H:%M %d-%m-%y\',\n  \'ban_max_online_access\' => \'100,200\',\n  \'ban_retrigger\' => \'0\',\n  \'cachestatus\' => \'\',\n  \'check_updates\' => \'1\',\n  \'comments_disabled\' => \'0\',\n  \'comments_emoticons\' => \'0\',\n  \'comments_engine\' => \'e107\',\n  \'comments_icon\' => \'0\',\n  \'comments_moderate\' => \'247\',\n  \'comments_sort\' => \'desc\',\n  \'compress_output\' => \'0\',\n  \'contact_emailcopy\' => \'0\',\n  \'contact_visibility\' => \'0\',\n  \'contact_filter\' => \'\',\n  \'cookie_name\' => \'soft_cookie\',\n  \'core-infopanel-default\' => \n  array (\n    0 => \'e-administrator\',\n    1 => \'e-cpage\',\n    2 => \'e-filemanager\',\n    3 => \'e-frontpage\',\n    4 => \'e-image\',\n    5 => \'e-mailout\',\n    6 => \'e-menus\',\n    7 => \'e-meta\',\n    8 => \'e-newspost\',\n    9 => \'e-plugin\',\n    10 => \'e-prefs\',\n    11 => \'e-links\',\n    12 => \'e-theme\',\n    13 => \'e-userclass2\',\n    14 => \'e-users\',\n    15 => \'e-wmessage\',\n  ),\n  \'db_updates\' => \n  array (\n  ),\n  \'developer\' => \'0\',\n  \'disable_emailcheck\' => \'0\',\n  \'disallowMultiLogin\' => \'0\',\n  \'display_memory_usage\' => \'0\',\n  \'displayname_class\' => \'255\',\n  \'displayname_maxlength\' => \'20\',\n  \'displayrendertime\' => \'0\',\n  \'displaysql\' => \'0\',\n  \'displaythemeinfo\' => \'1\',\n  \'e_admin_list\' => \n  array (\n    \'social\' => \'social\',\n  ),\n  \'e_comment_list\' => \n  array (\n    \'social\' => \'social\',\n  ),\n  \'e_event_list\' => \n  array (\n    \'news\' => \'news\',\n    \'social\' => \'social\',\n  ),\n  \'e_featurebox_list\' => \n  array (\n    \'news\' => \'news\',\n  ),\n  \'e_footer_list\' => \n  array (\n    \'tinymce4\' => \'tinymce4\',\n  ),\n  \'e_header_list\' => \n  array (\n    \'news\' => \'news\',\n    \'tinymce4\' => \'tinymce4\',\n  ),\n  \'e_jslib_cdn\' => \'1\',\n  \'e_jslib_cdn_provider\' => \'jsdelivr\',\n  \'e_jslib_browser_cache\' => \'0\',\n  \'e_jslib_nobcache\' => \'1\',\n  \'e_jslib_nocache\' => \'1\',\n  \'e_jslib_gzip\' => \'1\',\n  \'e_jslib_nocombine\' => \'1\',\n  \'e_jslib_core\' => \n  array (\n    \'prototype\' => \'none\',\n    \'jquery\' => \'all\',\n  ),\n  \'e_jslib_plugin\' => \n  array (\n  ),\n  \'e_jslib_theme\' => \n  array (\n  ),\n  \'e_meta_list\' => \n  array (\n    \'rss_menu\' => \'rss_menu\',\n  ),\n  \'e_module_list\' => \n  array (\n    \'social\' => \'social\',\n  ),\n  \'e_related_list\' => \n  array (\n    \'news\' => \'news\',\n    \'page\' => \'page\',\n  ),\n  \'e_rss_list\' => \n  array (\n    \'news\' => \'news\',\n  ),\n  \'e_search_list\' => \n  array (\n    \'news\' => \'news\',\n    \'page\' => \'page\',\n    \'user\' => \'user\',\n  ),\n  \'e_shortcode_list\' => \n  array (\n    \'page\' => \'page\',\n    \'siteinfo\' => \'siteinfo\',\n    \'social\' => \'social\',\n  ),\n  \'shortcode_list\' => \n  array (\n  ),\n  \'e_sitelink_list\' => \n  array (\n    \'news\' => \'news\',\n    \'page\' => \'page\',\n  ),\n  \'e_sql_list\' => \n  array (\n    \'rss_menu\' => \'rss_sql\',\n  ),\n  \'e_url_list\' => \n  array (\n    \'contact\' => \'contact\',\n    \'news\' => \'news\',\n    \'rss_menu\' => \'rss_menu\',\n  ),\n  \'e_user_list\' => \n  array (\n    \'user\' => \'user\',\n  ),\n  \'email_text\' => \'\',\n  \'email_item_class\' => \'253\',\n  \'emotepack\' => \'default\',\n  \'enable_rdns\' => \'0\',\n  \'enable_rdns_on_ban\' => \'0\',\n  \'failed_login_limit\' => \'10\',\n  \'filter_script\' => \'1\',\n  \'flood_hits\' => \'100\',\n  \'flood_time\' => \'30\',\n  \'flood_timeout\' => \'5\',\n  \'forumdate\' => \'%a %b %d %Y, %I:%M%p\',\n  \'fpwcode\' => \'0\',\n  \'frontpage\' => \n  array (\n    0 => \'news.php\',\n  ),\n  \'frontpage_force\' => \n  array (\n    0 => \'\',\n  ),\n  \'gdpr_privacypolicy\' => \'\',\n  \'gdpr_termsandconditions\' => \'\',\n  \'html_abuse\' => \'1\',\n  \'im_height\' => \'80\',\n  \'im_path\' => \'/usr/X11R6/bin/\',\n  \'im_width\' => \'80\',\n  \'image_post\' => \'1\',\n  \'image_post_class\' => \'0\',\n  \'image_preload\' => \'0\',\n  \'img_import_resize\' => \'1200x800\',\n  \'inline_editing\' => \'255\',\n  \'inputdate\' => \'%A, %d %b, %Y\',\n  \'inputtime\' => \'%I:%M %p\',\n  \'install_date\' => 1618643230,\n  \'lan_global_list\' => \n  array (\n    \'page\' => \'page\',\n    \'social\' => \'social\',\n    \'rss_menu\' => \'rss_menu\',\n    \'user\' => \'user\',\n  ),\n  \'link_replace\' => \'0\',\n  \'link_text\' => \'\',\n  \'linkpage_screentip\' => \'0\',\n  \'links_new_window\' => \'1\',\n  \'log_page_accesses\' => \'0\',\n  \'log_refertype\' => \'1\',\n  \'logcode\' => \'0\',\n  \'loginname_maxlength\' => \'30\',\n  \'longdate\' => \'%A %d %B %Y - %H:%M:%S\',\n  \'mail_pause\' => \'3\',\n  \'mail_bounce\' => \'none\',\n  \'mail_pausetime\' => \'4\',\n  \'mail_sendstyle\' => \'texthtml\',\n  \'mail_workpertick\' => \'5\',\n  \'mailer\' => \'php\',\n  \'bulkmailer\' => \'smtp\',\n  \'main_wordwrap\' => \'\',\n  \'maintainance_flag\' => \'0\',\n  \'make_clickable\' => \'0\',\n  \'memberlist_access\' => \'253\',\n  \'membersonly_enabled\' => \'0\',\n  \'membersonly_exceptions\' => \n  array (\n    0 => \'\',\n  ),\n  \'menu_wordwrap\' => \'0\',\n  \'menuconfig_list\' => \n  array (\n    \'login_menu\' => \n    array (\n      \'name\' => \'Login\',\n      \'link\' => \'login_menu/config.php\',\n    ),\n    \'news\' => \n    array (\n      \'name\' => \'Newsmonths\',\n      \'link\' => \'blogcalendar_menu/config.php\',\n    ),\n  ),\n  \'membersonly_redirect\' => \'login\',\n  \'meta_tag\' => \'\',\n  \'multilanguage\' => \'0\',\n  \'nbr_cols\' => \'1\',\n  \'nested_comments\' => \'1\',\n  \'news_cats\' => \'\',\n  \'news_default_template\' => \'default\',\n  \'news_list_limit\' => \'10\',\n  \'news_newdateheader\' => \'0\',\n  \'newsposts\' => \'3\',\n  \'newsposts_archive\' => \'0\',\n  \'newsposts_archive_title\' => \'\',\n  \'noLanguageSubs\' => \'0\',\n  \'null\' => \'\',\n  \'old_np\' => \'0\',\n  \'pageCookieExpire\' => \'84600\',\n  \'passwordEncoding\' => 3,\n  \'password_CHAP\' => \'0\',\n  \'plug_installed\' => \n  array (\n    \'news\' => \'1.0\',\n    \'page\' => \'1.0\',\n    \'siteinfo\' => \'1.0\',\n    \'social\' => \'1.0\',\n    \'tinymce4\' => \'1.0\',\n    \'rss_menu\' => \'1.3\',\n    \'contact\' => \'1.0\',\n    \'user\' => \'1.0\',\n  ),\n  \'post_html\' => \'254\',\n  \'post_script\' => \'255\',\n  \'predefinedLoginName\' => \'\',\n  \'profanity_filter\' => \'0\',\n  \'profanity_replace\' => \'[censored]\',\n  \'profanity_words\' => \'\',\n  \'redirectsiteurl\' => \'0\',\n  \'replyto_email\' => \'naraharinath@hotmail.com\',\n  \'replyto_name\' => \'Administrator\',\n  \'resize_method\' => \'gd2\',\n  \'resize_dimensions\' => \n  array (\n    \'news-image\' => \n    array (\n      \'w\' => \'300\',\n      \'h\' => \'300\',\n    ),\n    \'news-bbcode\' => \n    array (\n      \'w\' => \'300\',\n      \'h\' => \'300\',\n    ),\n    \'page-bbcode\' => \n    array (\n      \'w\' => \'300\',\n      \'h\' => \'300\',\n    ),\n  ),\n  \'search_highlight\' => \'1\',\n  \'search_restrict\' => \'0\',\n  \'session_lifetime\' => \'86400\',\n  \'session_save_method\' => \'db\',\n  \'shortdate\' => \'%d %b %Y\',\n  \'signcode\' => \'0\',\n  \'signup_disallow_text\' => \'\',\n  \'signup_maxip\' => \'3\',\n  \'signup_option_class\' => \'1\',\n  \'signup_option_customtitle\' => \'0\',\n  \'signup_option_email_confirm\' => \'0\',\n  \'signup_option_hideemail\' => \'0\',\n  \'signup_option_image\' => \'0\',\n  \'signup_option_password\' => \'2\',\n  \'signup_option_realname\' => \'0\',\n  \'signup_option_signature\' => \'0\',\n  \'signup_pass_len\' => \'6\',\n  \'signup_text\' => \'\',\n  \'signup_text_after\' => \'\',\n  \'siteadmin\' => \'Administrator\',\n  \'siteadminemail\' => \'naraharinath@hotmail.com\',\n  \'sitebutton\' => \'{e_IMAGE}button.png\',\n  \'sitecontactinfo\' => \'[b]My Company[/b]\n13 My Address St.\nCity, State, Country\n[b]Phone:[/b] 555-555-5555\n[b]Email:[/b] sales@mydomain.com\',\n  \'sitecontacts\' => \'255\',\n  \'sitedescription\' => \'\',\n  \'sitedisclaimer\' => \'\',\n  \'sitelang_init\' => \'English\',\n  \'sitelanguage\' => \'English\',\n  \'sitelogo\' => \'{e_THEME}voux/install/logo2B252832529.png\',\n  \'sitename\' => \'My Website\',\n  \'sitetag\' => \'e107 Website System\',\n  \'sitetheme\' => \'voux\',\n  \'sitetheme_custompages\' => \n  array (\n    \'jumbotron_full\' => \n    array (\n      0 => \'forum\',\n    ),\n    \'jumbotron_sidebar_right\' => \n    array (\n      0 => \'/news\',\n    ),\n  ),\n  \'sitetheme_deflayout\' => \'jumbotron_sidebar_right\',\n  \'sitetheme_layouts\' => \n  array (\n    \'jumbotron_home\' => \n    array (\n      \'@attributes\' => \n      array (\n        \'title\' => \'Jumbotron (home)\',\n        \'default\' => \'false\',\n      ),\n      \'@value\' => \'\',\n    ),\n    \'modern_business_home\' => \n    array (\n      \'@attributes\' => \n      array (\n        \'title\' => \'Modern Business: Home page carousel with fixed custom-menus\',\n      ),\n      \'@value\' => \'\',\n    ),\n    \'jumbotron_full\' => \n    array (\n      \'@attributes\' => \n      array (\n        \'title\' => \'Jumbotron (full-width)\',\n      ),\n      \'custompages\' => \'forum\',\n    ),\n    \'jumbotron_sidebar_right\' => \n    array (\n      \'@attributes\' => \n      array (\n        \'title\' => \'Jumbotron (sidebar-right)\',\n        \'default\' => \'true\',\n      ),\n      \'custompages\' => \'/news\',\n      \'menuPresets\' => \n      array (\n        \'area\' => \n        array (\n          0 => \n          array (\n            \'@attributes\' => \n            array (\n              \'id\' => \'1\',\n            ),\n            \'menu\' => \n            array (\n              0 => \n              array (\n                \'@attributes\' => \n                array (\n                  \'name\' => \'search\',\n                ),\n                \'@value\' => \'\',\n              ),\n              1 => \n              array (\n                \'@attributes\' => \n                array (\n                  \'name\' => \'news_categories\',\n                ),\n                \'@value\' => \'\',\n              ),\n              2 => \n              array (\n                \'@attributes\' => \n                array (\n                  \'name\' => \'other_news\',\n                ),\n                \'@value\' => \'\',\n              ),\n              3 => \n              array (\n                \'@attributes\' => \n                array (\n                  \'name\' => \'other_news2\',\n                ),\n                \'@value\' => \'\',\n              ),\n              4 => \n              array (\n                \'@attributes\' => \n                array (\n                  \'name\' => \'blogcalendar\',\n                ),\n                \'@value\' => \'\',\n              ),\n            ),\n          ),\n        ),\n      ),\n    ),\n  ),\n  \'sitetheme_pref\' => \'\',\n  \'siteurl\' => \'/aikyanew/\',\n  \'smiley_activate\' => \'1\',\n  \'smtp_server\' => \'\',\n  \'smtp_username\' => \'\',\n  \'smtp_password\' => \'\',\n  \'smtp_options\' => \'\',\n  \'smtp_port\' => \'25\',\n  \'social_login_active\' => \'0\',\n  \'social_login\' => \'array()\',\n  \'ssl_enabled\' => \'0\',\n  \'subnews_attach\' => \'253\',\n  \'subnews_class\' => \'253\',\n  \'subnews_htmlarea\' => \'0\',\n  \'subnews_resize\' => \'\',\n  \'themecss\' => \'style.css\',\n  \'thumbnail_quality\' => \'75\',\n  \'timezone\' => \'UTC\',\n  \'track_online\' => \'1\',\n  \'ue_upgrade\' => \'1\',\n  \'upload_class\' => \'255\',\n  \'upload_enabled\' => \'0\',\n  \'upload_maxfilesize\' => \'2M\',\n  \'url_aliases\' => \n  array (\n  ),\n  \'url_config\' => \n  array (\n    \'index\' => \'core\',\n    \'news\' => \'core\',\n    \'page\' => \'core\',\n    \'search\' => \'core\',\n    \'system\' => \'core\',\n    \'user\' => \'core\',\n  ),\n  \'url_profiles\' => \n  array (\n  ),\n  \'url_disable_pathinfo\' => \'1\',\n  \'url_error_redirect\' => \'0\',\n  \'url_locations\' => \n  array (\n    \'index\' => \n    array (\n      0 => \'core\',\n    ),\n    \'news\' => \n    array (\n      0 => \'core\',\n      1 => \'core/sef\',\n      2 => \'core/sef_full\',\n      3 => \'core/sef_noid\',\n    ),\n    \'page\' => \n    array (\n      0 => \'core\',\n      1 => \'core/sef_chapters\',\n      2 => \'core/sef\',\n      3 => \'core/sef_noid\',\n    ),\n    \'search\' => \n    array (\n      0 => \'core\',\n      1 => \'core/rewrite\',\n    ),\n    \'system\' => \n    array (\n      0 => \'core\',\n      1 => \'core/rewrite\',\n    ),\n    \'user\' => \n    array (\n      0 => \'core\',\n      1 => \'core/rewrite\',\n    ),\n  ),\n  \'url_main_module\' => \'page\',\n  \'url_modules\' => \n  array (\n    \'core\' => \n    array (\n      0 => \'index\',\n      1 => \'news\',\n      2 => \'page\',\n      3 => \'search\',\n      4 => \'system\',\n      5 => \'user\',\n    ),\n    \'plugin\' => \n    array (\n    ),\n    \'override\' => \n    array (\n    ),\n  ),\n  \'url_sef_translate\' => \'dashl\',\n  \'useGeshi\' => \'0\',\n  \'use_coppa\' => \'1\',\n  \'user_new_period\' => \'3\',\n  \'user_reg\' => \'1\',\n  \'user_reg_secureveri\' => \'1\',\n  \'user_reg_veri\' => \'1\',\n  \'user_tracking\' => \'session\',\n  \'version\' => \'2.3.0\',\n  \'wm_enclose\' => \'1\',\n  \'wmessage_sc\' => \'0\',\n  \'wysiwyg\' => \'1\',\n  \'xup_enabled\' => \'1\',\n  \'xurl\' => \n  array (\n    \'facebook\' => \'http://facebook.com/themexpose\',\n    \'twitter\' => \'#\',\n    \'youtube\' => \'#\',\n    \'google\' => \'\',\n    \'linkedin\' => \'\',\n    \'github\' => \'\',\n    \'flickr\' => \'\',\n    \'instagram\' => \'#\',\n    \'pinterest\' => \'#\',\n    \'vimeo\' => \'\',\n  ),\n  \'xmlfeed_languagepacks\' => \'http://www.e107.org/themeupdate.php\',\n  \'xmlfeed_security\' => \'http://www.e107.org/themeupdate.php\',\n  \'avatar_upload\' => \'0\',\n  \'photo_upload\' => \'0\',\n  \'profile_rate\' => \'0\',\n  \'profile_comments\' => \'0\',\n  \'force_userupdate\' => \'0\',\n  \'del_unv\' => \'0\',\n  \'del_accu\' => \'1\',\n  \'signature_access\' => \'253\',\n  \'bbcode_list\' => \n  array (\n  ),\n  \'shortcode_legacy_list\' => \n  array (\n  ),\n  \'e_frontpage_list\' => \n  array (\n    \'news\' => \'news\',\n    \'page\' => \'page\',\n  ),\n  \'e_menu_list\' => \n  array (\n    \'news\' => \'news\',\n    \'page\' => \'page\',\n  ),\n  \'e_gsitemap_list\' => \n  array (\n    \'news\' => \'news\',\n  ),\n  \'e_dashboard_list\' => \n  array (\n    \'user\' => \'user\',\n  ),\n  \'e_mailout_list\' => \n  array (\n    \'user\' => \'user\',\n  ),\n  \'fb_active\' => \'1\',\n  \'sitetheme_version\' => \'1.0\',\n  \'sitetheme_glyphicons\' => \n  array (\n  ),\n)'),
('plugin_tinymce4', 'array (\n  \'paste_as_text\' => \'0\',\n  \'browser_spellcheck\' => \'1\',\n  \'visualblocks\' => \'1\',\n  \'code_highlight_class\' => \'prettyprint linenums\',\n)'),
('plugin_social', 'array (\n  \'sharing_providers\' => \n  array (\n    \'email\' => \'1\',\n    \'facebook-like\' => \'1\',\n    \'twitter\' => \'1\',\n    \'google-plus1\' => \'1\',\n    \'pinterest\' => \'1\',\n  ),\n)'),
('theme_voux', 'array (\n  \'branding\' => \'sitename\',\n  \'nav_alignment\' => \'right\',\n  \'usernav_placement\' => \'bottom\',\n)'),
('history_prefs', 'array (\n  \'most_members_online\' => 0,\n  \'most_guests_online\' => 1,\n  \'most_online_datestamp\' => 1618643278,\n)');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_core_media`
--

CREATE TABLE `e107nu_core_media` (
  `media_id` int(10) UNSIGNED NOT NULL,
  `media_type` varchar(50) NOT NULL DEFAULT '',
  `media_name` varchar(255) NOT NULL DEFAULT '',
  `media_caption` varchar(255) NOT NULL DEFAULT '',
  `media_description` varchar(255) NOT NULL DEFAULT '',
  `media_category` varchar(255) NOT NULL DEFAULT '',
  `media_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `media_author` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `media_url` varchar(255) NOT NULL DEFAULT '',
  `media_size` int(20) UNSIGNED NOT NULL DEFAULT '0',
  `media_dimensions` varchar(25) NOT NULL DEFAULT '',
  `media_userclass` varchar(255) NOT NULL DEFAULT '',
  `media_usedby` text NOT NULL,
  `media_tags` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_core_media`
--

INSERT INTO `e107nu_core_media` (`media_id`, `media_type`, `media_name`, `media_caption`, `media_description`, `media_category`, `media_datestamp`, `media_author`, `media_url`, `media_size`, `media_dimensions`, `media_userclass`, `media_usedby`, `media_tags`) VALUES
(1, 'image/png', 'rss_16.png', 'rss_16.png', '', '_icon_16', 1606767658, 1, '{e_PLUGIN}rss_menu/images/rss_16.png', 898, '16 x 16', '0', '', ''),
(2, 'image/png', 'rss_32.png', 'rss_32.png', '', '_icon_32', 1606767658, 1, '{e_PLUGIN}rss_menu/images/rss_32.png', 2486, '32 x 32', '0', '', ''),
(3, 'image/png', 'icon_16.png', 'icon_16.png', '', '_icon_16', 1606767658, 1, '{e_PLUGIN}tinymce4/images/icon_16.png', 859, '16 x 16', '0', '', ''),
(4, 'image/png', 'icon_32.png', 'icon_32.png', '', '_icon_32', 1606767658, 1, '{e_PLUGIN}tinymce4/images/icon_32.png', 2441, '32 x 32', '0', '', ''),
(5, 'image/png', 'icon_16.png', 'icon_16.png', '', '_icon_16', 1606767658, 1, '{e_PLUGIN}social/images/icon_16.png', 1748, '16 x 16', '0', '', ''),
(6, 'image/png', 'icon_32.png', 'icon_32.png', '', '_icon_32', 1606767658, 1, '{e_PLUGIN}social/images/icon_32.png', 2446, '32 x 32', '0', '', ''),
(7, 'image/svg+xml', 'fontello.svg', 'fontello.svg', '', '_icon_svg', 1606767658, 1, '{e_PLUGIN}social/font/fontello.svg', 25299, '', '0', '', ''),
(17, 'image/jpeg', '2.jpg', '', '', '_common_image', 1464629338, 1, '{e_THEME}voux/install/2.jpg', 136551, '1162 x 775', '0', '', ''),
(18, 'image/png', 'logo%2B%25283%2529.png', '', '', '_common_image', 1464629358, 1, '{e_THEME}voux/install/logo%2B%25283%2529.png', 6167, '482 x 140', '0', '', ''),
(19, 'image/png', 'logo2B252832529.png', '', '', '_common_image', 1464629632, 1, '{e_THEME}voux/install/logo2B252832529.png', 6167, '482 x 140', '0', '', ''),
(20, 'image/jpeg', 'post5-1080x720.jpg', '', '', '_common_image', 1464629746, 1, '{e_THEME}voux/install/post5-1080x720.jpg', 179902, '1080 x 720', '0', '', ''),
(21, 'image/jpeg', 'post8-1080x715.jpg', '', '', '_common_image', 1464629772, 1, '{e_THEME}voux/install/post8-1080x715.jpg', 139250, '1080 x 715', '0', '', ''),
(22, 'image/jpeg', 'DeathtoStock_Portraits-4-840x512.jpg', '', '', '_common_image', 1464629805, 1, '{e_THEME}voux/install/DeathtoStock_Portraits-4-840x512.jpg', 134141, '840 x 512', '0', '', ''),
(23, 'image/jpeg', 'DeathtoStock_NYC5-840x512.jpg', '', '', '_common_image', 1464629821, 1, '{e_THEME}voux/install/DeathtoStock_NYC5-840x512.jpg', 128655, '840 x 512', '0', '', ''),
(24, 'image/jpeg', 'gasmask.jpg', '', '', '_common_image', 1464629883, 1, '{e_THEME}voux/install/gasmask.jpg', 91054, '1200 x 830', '0', '', ''),
(25, 'image/png', 'sketch-subscribe.png', '', '', '_common_image', 1464629928, 1, '{e_THEME}voux/install/sketch-subscribe.png', 8432, '400 x 120', '0', '', ''),
(26, 'image/jpeg', '2_.jpg', '', '', 'news', 1464637221, 1, '{e_THEME}voux/install/2_.jpg', 136551, '1162 x 775', '0', '', ''),
(27, 'image/jpeg', '8.jpg', '', '', 'news', 1464637241, 1, '{e_THEME}voux/install/8.jpg', 73660, '1140 x 678', '0', '', ''),
(28, 'image/jpeg', 'preview.jpg', 'preview.jpg', '', '_common_image', 1606767658, 1, '{e_THEME}voux/preview.jpg', 78505, '1920 x 1080', '0', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_core_media_cat`
--

CREATE TABLE `e107nu_core_media_cat` (
  `media_cat_id` int(10) UNSIGNED NOT NULL,
  `media_cat_owner` varchar(255) NOT NULL DEFAULT '',
  `media_cat_category` varchar(255) NOT NULL DEFAULT '',
  `media_cat_title` text NOT NULL,
  `media_cat_sef` varchar(255) NOT NULL DEFAULT '',
  `media_cat_diz` text NOT NULL,
  `media_cat_class` int(5) DEFAULT '0',
  `media_cat_image` varchar(255) NOT NULL DEFAULT '',
  `media_cat_order` int(3) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_core_media_cat`
--

INSERT INTO `e107nu_core_media_cat` (`media_cat_id`, `media_cat_owner`, `media_cat_category`, `media_cat_title`, `media_cat_sef`, `media_cat_diz`, `media_cat_class`, `media_cat_image`, `media_cat_order`) VALUES
(1, '_common', '_common_image', '(Common Images)', '', 'Media in this category will be available in all areas of admin.', 253, '', 0),
(2, '_common', '_common_file', '(Common Files)', '', 'Media in this category will be available in all areas of admin.', 253, '', 0),
(3, '_common', '_common_video', '(Common Videos)', '', 'Media in this category will be available in all areas of admin.', 253, '', 0),
(4, '_common', '_common_audio', '(Common Audio)', '', 'Media in this category will be available in all areas of admin.', 253, '', 0),
(5, 'news', 'news', 'News', '', 'Will be available in the news area.', 253, '', 1),
(6, 'page', 'page', 'Custom Pages', '', 'Will be available in the custom pages area of admin.', 253, '', 0),
(7, 'download', 'download_image', 'Download Images', '', '', 253, '', 0),
(8, 'download', 'download_thumb', 'Download Thumbnails', '', '', 253, '', 0),
(9, 'download', 'download_file', 'Download Files', '', '', 253, '', 0),
(10, 'news', 'news_thumb', 'News Thumbnails (Legacy)', '', 'Legacy news thumbnails.', 253, '', 1),
(11, '_icon', '_icon_16', 'Icons 16px', '', 'Available where icons are used in admin.', 253, '', 0),
(12, '_icon', '_icon_32', 'Icons 32px', '', 'Available where icons are used in admin.', 253, '', 0),
(13, '_icon', '_icon_48', 'Icons 48px', '', 'Available where icons are used in admin.', 253, '', 0),
(14, '_icon', '_icon_64', 'Icons 64px', '', 'Available where icons are used in admin.', 253, '', 0),
(15, '_icon', '_icon_svg', 'Icons SVG', '', 'Available where icons are used in admin.', 253, '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_cron`
--

CREATE TABLE `e107nu_cron` (
  `cron_id` int(10) UNSIGNED NOT NULL,
  `cron_name` varchar(50) NOT NULL,
  `cron_category` varchar(20) NOT NULL,
  `cron_description` varchar(255) NOT NULL,
  `cron_function` varchar(50) NOT NULL,
  `cron_tab` varchar(255) NOT NULL,
  `cron_lastrun` int(13) UNSIGNED NOT NULL,
  `cron_active` int(1) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_dblog`
--

CREATE TABLE `e107nu_dblog` (
  `dblog_id` int(10) UNSIGNED NOT NULL,
  `dblog_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `dblog_microtime` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `dblog_type` tinyint(3) NOT NULL DEFAULT '0',
  `dblog_eventcode` varchar(10) NOT NULL DEFAULT '',
  `dblog_user_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `dblog_user_name` varchar(100) NOT NULL DEFAULT '',
  `dblog_ip` varchar(45) NOT NULL DEFAULT '',
  `dblog_caller` varchar(255) NOT NULL DEFAULT '',
  `dblog_title` varchar(255) NOT NULL DEFAULT '',
  `dblog_remarks` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_generic`
--

CREATE TABLE `e107nu_generic` (
  `gen_id` int(10) UNSIGNED NOT NULL,
  `gen_type` varchar(80) NOT NULL DEFAULT '',
  `gen_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `gen_user_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `gen_ip` varchar(80) NOT NULL DEFAULT '',
  `gen_intdata` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `gen_chardata` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_generic`
--

INSERT INTO `e107nu_generic` (`gen_id`, `gen_type`, `gen_datestamp`, `gen_user_id`, `gen_ip`, `gen_intdata`, `gen_chardata`) VALUES
(1, 'wmessage', 1145848343, 1, 'Hello World!', 0, '[html]This is the voux template for a simple blog/website. The text you are reading is the &quot;Welcome Message&quot; and the items below are &quot;News Items&quot;. Visit the admin-area to modify.<br><br><a class=&quot;btn btn-primary btn-large &quot; href=&quot;e107_admin/admin.php&quot;>Go to Admin area</a><br>[/html]');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_links`
--

CREATE TABLE `e107nu_links` (
  `link_id` int(10) UNSIGNED NOT NULL,
  `link_name` varchar(100) NOT NULL DEFAULT '',
  `link_url` varchar(200) NOT NULL DEFAULT '',
  `link_description` text NOT NULL,
  `link_button` varchar(100) NOT NULL DEFAULT '',
  `link_category` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `link_order` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `link_parent` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `link_open` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `link_class` varchar(255) NOT NULL DEFAULT '0',
  `link_function` varchar(100) NOT NULL DEFAULT '',
  `link_sefurl` varchar(255) NOT NULL,
  `link_owner` varchar(50) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_links`
--

INSERT INTO `e107nu_links` (`link_id`, `link_name`, `link_url`, `link_description`, `link_button`, `link_category`, `link_order`, `link_parent`, `link_open`, `link_class`, `link_function`, `link_sefurl`, `link_owner`) VALUES
(1, 'Home', 'index.php', '', '', 1, 0, 0, 0, '0', '', '', ''),
(3, 'Members', 'user.php', '', 'icon-user.glyph', 2, 8, 0, 0, '0', '', '', ''),
(4, 'Submit News', 'submitnews.php', '', 'icon-upload.glyph', 2, 9, 0, 0, '253', '', '', ''),
(5, 'Contact', 'contact.php', '', '', 1, 7, 0, 0, '0', '', 'index', 'contact'),
(6, 'News', 'news.php', '', '', 1, 2, 0, 0, '255', '', 'index', 'news'),
(7, 'Content', 'page.php', '', '', 1, 3, 0, 0, '0', '', '', ''),
(8, 'Article 1', 'page.php?id=1', '', '', 1, 4, 7, 0, '0', '', '', ''),
(9, 'Article 2', 'page.php?id=2', '', '', 1, 5, 7, 0, '0', '', '', ''),
(10, 'Article 3', 'page.php?id=3', '', '', 1, 6, 7, 0, '0', '', '', ''),
(11, 'About', 'page.php?id=1', '', '', 1, 1, 0, 0, '0', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_mail_content`
--

CREATE TABLE `e107nu_mail_content` (
  `mail_source_id` int(10) UNSIGNED NOT NULL,
  `mail_content_status` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `mail_total_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_togo_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_sent_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_fail_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_bounce_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_start_send` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_end_send` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_create_date` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_creator` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_create_app` varchar(20) NOT NULL DEFAULT '',
  `mail_e107_priority` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `mail_notify_complete` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `mail_last_date` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_title` varchar(100) NOT NULL DEFAULT '',
  `mail_subject` varchar(100) NOT NULL DEFAULT '',
  `mail_body` text,
  `mail_body_templated` text,
  `mail_other` text,
  `mail_media` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_mail_recipients`
--

CREATE TABLE `e107nu_mail_recipients` (
  `mail_target_id` int(10) UNSIGNED NOT NULL,
  `mail_recipient_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_recipient_email` varchar(80) NOT NULL DEFAULT '',
  `mail_recipient_name` varchar(80) NOT NULL DEFAULT '',
  `mail_status` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `mail_detail_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_send_date` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `mail_target_info` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_menus`
--

CREATE TABLE `e107nu_menus` (
  `menu_id` int(10) UNSIGNED NOT NULL,
  `menu_name` varchar(100) NOT NULL DEFAULT '',
  `menu_location` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `menu_order` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `menu_class` varchar(255) NOT NULL DEFAULT '0',
  `menu_pages` text NOT NULL,
  `menu_path` varchar(100) NOT NULL DEFAULT '',
  `menu_layout` varchar(100) NOT NULL DEFAULT '',
  `menu_parms` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_menus`
--

INSERT INTO `e107nu_menus` (`menu_id`, `menu_name`, `menu_location`, `menu_order`, `menu_class`, `menu_pages`, `menu_path`, `menu_layout`, `menu_parms`) VALUES
(1, 'login_menu', 0, 0, '0', '', 'login_menu/', '', ''),
(2, 'online_menu', 0, 0, '0', '', 'online/', '', ''),
(3, 'blogcalendar_menu', 0, 0, '0', '', 'blogcalendar_menu/', '', ''),
(5, 'search_menu', 0, 0, '0', '', 'search_menu/', '', ''),
(6, 'counter_menu', 0, 0, '0', '', 'siteinfo/', '', ''),
(7, 'userlanguage_menu', 0, 0, '0', '', 'user/', '', ''),
(8, 'compliance_menu', 0, 0, '0', '', 'siteinfo/', '', ''),
(9, 'other_news_menu', 0, 0, '0', '', 'news/', '', ''),
(10, 'clock_menu', 0, 0, '0', '', 'clock_menu/', '', ''),
(11, 'other_news2_menu', 0, 0, '0', '', 'news/', '', ''),
(12, 'comment_menu', 0, 0, '0', '', 'comment_menu/', '', ''),
(13, 'lastseen_menu', 0, 0, '0', '', 'online/', '', ''),
(14, 'news_months_menu', 1, 3, '0', '', 'news/', '', ''),
(15, 'admin_menu', 0, 0, '0', '', 'admin_menu/', '', ''),
(16, 'news_categories_menu', 0, 0, '0', '', 'news/', '', ''),
(17, 'latestnews_menu', 0, 0, '0', '', 'news/', '', ''),
(18, 'usertheme_menu', 0, 0, '0', '', 'user/', '', ''),
(19, 'powered_by_menu', 0, 0, '0', '', 'siteinfo/', '', ''),
(20, 'sitebutton_menu', 0, 0, '0', '', 'siteinfo/', '', ''),
(21, 'news_carousel_menu', 0, 0, '0', '', 'news/', '', ''),
(22, 'chapter_menu', 0, 0, '0', '', 'page/', '', ''),
(23, 'page_menu', 0, 0, '0', '', 'page/', '', ''),
(24, 'page_navigation_menu', 0, 0, '0', '', 'page/', '', ''),
(25, 'jumbotron-menu-2', 0, 0, '0', '', '2', '', ''),
(26, 'jumbotron-menu-3', 0, 0, '0', '', '3', '', ''),
(27, 'feature-menu-1', 0, 0, '0', '', '4', '', ''),
(28, 'feature-menu-2', 0, 0, '0', '', '5', '', ''),
(29, 'feature-menu-3', 0, 0, '0', '', '6', '', ''),
(43, 'latestnews_menu', 1, 2, '0', '', 'news/', '', 'array (\n  \'caption\' => \n  array (\n    \'English\' => \'Recent Posts\',\n  ),\n  \'count\' => \'7\',\n  \'category\' => \'\',\n)'),
(42, 'about-me', 1, 1, '0', '', '1', '', ''),
(41, 'about-me', 0, 0, '0', '', '1', '', ''),
(33, 'contact_menu', 0, 0, '0', '', 'contact/', '', ''),
(36, 'news_grid_menu', 0, 0, '0', '', 'news/', '', ''),
(37, 'rss_menu', 0, 0, '0', '', 'rss_menu/', '', ''),
(38, 'fb_like_menu', 0, 0, '0', '', 'social/', '', ''),
(40, 'twitter_menu', 0, 0, '0', '', 'social/', '', ''),
(44, 'fb_like_menu', 101, 1, '0', '', 'social/', '', ''),
(46, 'other_news2_menu', 100, 1, '0', '', 'news/', '', 'array (\n  \'caption\' => \n  array (\n    \'English\' => \'Featured Posts\',\n  ),\n)'),
(47, 'news_archive_menu', 0, 0, '0', '', 'news/', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_news`
--

CREATE TABLE `e107nu_news` (
  `news_id` int(10) UNSIGNED NOT NULL,
  `news_title` varchar(255) NOT NULL DEFAULT '',
  `news_sef` varchar(200) NOT NULL DEFAULT '',
  `news_body` longtext NOT NULL,
  `news_extended` longtext NOT NULL,
  `news_meta_keywords` varchar(255) NOT NULL DEFAULT '',
  `news_meta_description` text NOT NULL,
  `news_meta_robots` varchar(255) DEFAULT '',
  `news_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `news_author` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `news_category` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `news_allow_comments` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `news_start` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `news_end` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `news_class` varchar(255) NOT NULL DEFAULT '0',
  `news_render_type` varchar(20) NOT NULL DEFAULT '0',
  `news_comment_total` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `news_summary` text NOT NULL,
  `news_thumbnail` text NOT NULL,
  `news_sticky` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `news_template` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_news`
--

INSERT INTO `e107nu_news` (`news_id`, `news_title`, `news_sef`, `news_body`, `news_extended`, `news_meta_keywords`, `news_meta_description`, `news_meta_robots`, `news_datestamp`, `news_author`, `news_category`, `news_allow_comments`, `news_start`, `news_end`, `news_class`, `news_render_type`, `news_comment_total`, `news_summary`, `news_thumbnail`, `news_sticky`, `news_template`) VALUES
(1, 'Game Mask PC Review', 'welcome-to-e107', '[html]<p>Lorem ipsum dolor sit amet, no meis semper dicunt est, petentium eloquentiam quo ne. At vero facer eam. Ex nam altera oportere, nisl natum prima id pro. Rebum augue dissentiet eum te, vel veniam eirmod option ea, at eos velit repudiare. Ius sumo dicit adolescens id, an cum efficiantur concludaturque.<br><br>Summo sensibus cum ne, et duo torquatos conceptam. No aeque elitr constituam qui. Nostro corpora nec no, diam verterem tincidunt has et. Altera accumsan urbanitas pro eu, ei assum voluptaria sed. Eam tibique nominavi consequuntur an.<br><br>Ei perfecto delicata usu, quo eius noster blandit te. Eu doctus volumus pri. Meis argumentum an nam, eos odio prima autem an. Te complectitur intellegebat pro, ius id alterum maiestatis. Ea facer accusata sed, ex illum antiopam quo.<br><br>Altera putent pri ad, in phaedrum dissentiunt per. Te eum everti dolores. Ut mea vero autem viderer, mel brute harum senserit id. Minim senserit eloquentiam duo in, sit ei justo graece petentium. Sea id homero oporteat invenire.<br><br>Pri semper dolorum ad. Cu eius repudiare eos. Eum in eleifend necessitatibus. Ne has mutat intellegebat.</p>[/html]', '[html]<p><strong>Lorem ipsum</strong> is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It&#039;s also called placeholder (or filler) text. It&#039;s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it&#039;s not genuine, correct, or comprehensible Latin anymore.</p>\n<p>While <strong>lorem ipsum</strong>&#039;s still resembles classical Latin, it actually has no meaning whatsoever. As Cicero&#039;s text doesn&#039;t contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the&nbsp; typographic appearence of European languages, as are digraphs not to be found in the original.</p>[/html]', 'welcome,new website', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie augue ac enim ultricies mattis ut ac massa. Ut malesuada bibendum felis sit amet aliquam. In facilisis nunc id velit egestas luctus. Aliquam dictum dolor et eros sagittis gravida. Vivamus aliquam rutrum fermentum. Pellentesque a eros quis ipsum molestie fringilla. Integer cursus augue in tellus sodales adipiscing. Integer nec orci bibendum, accumsan mauris...', '', 1454367600, 1, 1, 0, 0, 0, '0', '0,3', 0, 'Summary of the news item', '{e_THEME}voux/install/gasmask.jpg', 0, NULL),
(2, 'Ways To Remember Something', 'ways-to-remember-something', '[html]<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis</p>[/html]', '', 'break,food', 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis. Ut wisi enim ad minim...', '', 1459822800, 1, 3, 0, 0, 0, '0', '0', 0, '', '{e_THEME}voux/install/DeathtoStock_NYC5-840x512.jpg', 0, NULL),
(3, 'My Style Statement', 'my-style-statement', '[html]<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis</p>[/html]', '', 'break,food', 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis. Ut wisi enim ad minim...', '', 1461259800, 1, 3, 0, 0, 0, '0', '0,2,3', 0, '', '{e_THEME}voux/install/DeathtoStock_Portraits-4-840x512.jpg', 0, NULL),
(4, 'Draught Vaein Mynel', 'draught-vaein-mynel', '[html]<p>Mauris sem sem, maximus ac sem auctor, cursus congue massa. Aliquam erat volutpat. Donec maximus libero turpis, sed consequat sapien semper quis aliquet posuere dui, quis elementum sem maximus quis. Mauris sem sem, maximus ac sem auctor, cursus congue massa. Aliquam erat volutpat. Donec maximus libero turpis, sed consequat sapien semper quis. Ut aliquet posuere dui, quis elementum sem maximus quis. Sed volutpat iaculis augue vitae ullamcorper.<br><br>&nbsp;&nbsp;&nbsp; Aenean dignissim, enim eu condimentum varius, ante justo consequat elit, ut consequat urna leo ut diam. Fusce suscipit urna a dolor ullamcorper, non egestas leo consectetur.<br><br><br>Nam sit amet felis libero. Nullam pharetra justo ac nisi consequat, ac dapibus dolor fermentum. Fusce dolor neque,Quisque id efficitur nibh, in volutpat erat. Morbi vel facilisis nulla, id posuere velit. Maecenas tempor lorem ut molestie malesuada. Nulla facilisi. Pellentesque fermentum, felis vel lacinia pulvinar, erat neque tincidunt sapien, sit amet varius lacus justo id nisi. Nunc euismod lacus lectus, ac ullamcorper neque lacinia eget. Phasellus et odio et justo consectetur egestas.<br><br><br>Phasellus et odio et justo consectetur egestas Donec velit quam, ultricies pharetra elit ut, pharetra vulputate libero. Proin ac justo aliquam, egestas felis vel, feugiat lectus. Nulla vel consequat lacus, ut congue nisl. Fusce sit amet ipsum sit amet dolor imperdiet congue. Vestibulum blandit vel metus vitae vehicula. Aenean fermentum ornare turpis, eget iaculis ligula molestie quis. Phasellus vulputate vestibulum mi, id aliquam odio sagittis nec. Phasellus at sagittis est, quis ullamcorper tortor. Pellentesque est libero, convallis nec sollicitudin non, congue in nulla. Nunc ac tincidunt leo, non convallis purus. Proin sed dui non metus blandit pharetra at eu ante. Suspendisse tristique mauris ac dignissim gravida. Suspendisse nec dolor non ex finibus</p>[/html]', '', 'food,sport,vimeo', 'Mauris sem sem, maximus ac sem auctor, cursus congue massa. Aliquam erat volutpat. Donec maximus libero turpis, sed consequat sapien semper quis aliquet posuere dui, quis elementum sem maximus quis. Mauris sem sem, maximus ac sem auctor, cursus congue massa. Aliquam erat volutpat. Donec maximus libero turpis, sed consequat sapien semper quis. Ut aliquet posuere dui, quis elementum sem maximus quis. Sed volutpat...', '', 1462469100, 1, 3, 0, 0, 0, '0', '0', 0, '', '{e_THEME}voux/install/post5-1080x720.jpg', 0, NULL),
(5, 'Papilion Minter Savior', 'papilion-minter-savior', '[html]<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>[/html]', '[html]<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis</p>[/html]', 'fashion,food,slider', 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis. Ut wisi enim ad minim...', '', 1464637347, 1, 3, 0, 0, 0, '0', '0', 0, '', '{e_THEME}voux/install/2_.jpg,{e_THEME}voux/install/8.jpg', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_news_category`
--

CREATE TABLE `e107nu_news_category` (
  `category_id` tinyint(3) UNSIGNED NOT NULL,
  `category_name` varchar(200) NOT NULL DEFAULT '',
  `category_sef` varchar(200) NOT NULL DEFAULT '',
  `category_meta_description` text NOT NULL,
  `category_meta_keywords` varchar(255) NOT NULL DEFAULT '',
  `category_manager` tinyint(3) UNSIGNED NOT NULL DEFAULT '254',
  `category_icon` varchar(250) NOT NULL DEFAULT '',
  `category_order` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `category_template` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_news_category`
--

INSERT INTO `e107nu_news_category` (`category_id`, `category_name`, `category_sef`, `category_meta_description`, `category_meta_keywords`, `category_manager`, `category_icon`, `category_order`, `category_template`) VALUES
(1, 'Technology', 'technology', '', '', 254, 'news_16.png', 0, NULL),
(2, 'Food', 'food', '', '', 254, '', 1, NULL),
(3, 'Fashion', 'Fashion', '', 'fashion', 254, '', 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_online`
--

CREATE TABLE `e107nu_online` (
  `online_timestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `online_flag` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `online_user_id` varchar(100) NOT NULL DEFAULT '',
  `online_ip` varchar(45) NOT NULL DEFAULT '',
  `online_location` text NOT NULL,
  `online_pagecount` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `online_active` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `online_agent` varchar(255) NOT NULL DEFAULT '',
  `online_language` varchar(2) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_online`
--

INSERT INTO `e107nu_online` (`online_timestamp`, `online_flag`, `online_user_id`, `online_ip`, `online_location`, `online_pagecount`, `online_active`, `online_agent`, `online_language`) VALUES
(1618643278, 0, '1.Administrator', '0000:0000:0000:0000:0000:ffff:b753:8692', '/aikyanew/e107_admin/theme.php?mode=main&iframe=1&action=download&src=aWQ9ODgzJnVybD1odHRwcyUzQSUyRiUyRmUxMDcub3JnJTJGZTEwN19wbHVnaW5zJTJGYWRkb25zJTJGYWRkb25zLnBocCUzRmlkJTNEODgzJTI2YW1wJTNCbW9kYWwlM0QxJm1vZGU9YWRkb24mcHJpY2U9', 6, 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36 Edg/89.0.774.77', 'en');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_page`
--

CREATE TABLE `e107nu_page` (
  `page_id` int(10) UNSIGNED NOT NULL,
  `page_title` varchar(250) NOT NULL DEFAULT '',
  `page_sef` varchar(250) NOT NULL DEFAULT '',
  `page_chapter` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `page_metakeys` varchar(250) NOT NULL DEFAULT '',
  `page_metadscr` mediumtext,
  `page_metarobots` varchar(250) DEFAULT '',
  `page_text` mediumtext,
  `page_author` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `page_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `page_rating_flag` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `page_comment_flag` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `page_password` varchar(50) NOT NULL DEFAULT '',
  `page_class` varchar(250) NOT NULL DEFAULT '0',
  `page_ip_restrict` text,
  `page_template` varchar(50) NOT NULL DEFAULT '',
  `page_order` int(4) UNSIGNED NOT NULL DEFAULT '9999',
  `page_fields` mediumtext,
  `menu_name` varchar(50) DEFAULT '',
  `menu_title` varchar(250) NOT NULL DEFAULT '',
  `menu_text` mediumtext,
  `menu_image` varchar(250) NOT NULL DEFAULT '',
  `menu_icon` varchar(250) NOT NULL DEFAULT '',
  `menu_template` varchar(50) NOT NULL DEFAULT '',
  `menu_class` varchar(250) NOT NULL DEFAULT '0',
  `menu_button_url` varchar(250) NOT NULL DEFAULT '',
  `menu_button_text` varchar(250) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_page`
--

INSERT INTO `e107nu_page` (`page_id`, `page_title`, `page_sef`, `page_chapter`, `page_metakeys`, `page_metadscr`, `page_metarobots`, `page_text`, `page_author`, `page_datestamp`, `page_rating_flag`, `page_comment_flag`, `page_password`, `page_class`, `page_ip_restrict`, `page_template`, `page_order`, `page_fields`, `menu_name`, `menu_title`, `menu_text`, `menu_image`, `menu_icon`, `menu_template`, `menu_class`, `menu_button_url`, `menu_button_text`) VALUES
(1, 'About Me', 'about', 0, '', '', '', '[html]<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ipsum; imperdiet at risus non, dictum sagittis odio! Nulla facilisi. Pellentesque adipiscing facilisis pharetra. Morbi imperdiet augue in ligula luctus, et iaculis est porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ultricies vitae nisi ut porttitor. Curabitur lectus tellus, feugiat a elit vel, gravida iaculis dui. Nulla vulputate turpis dui, ac faucibus enim dignissim non. Ut non tellus suscipit, scelerisque orci sed, scelerisque sapien. Aenean convallis sodales nulla in porttitor. In pretium ante sapien, a tempor eros blandit nec.<br><br> Nulla non est nibh? Fusce lacinia quam adipiscing magna posuere dapibus. Sed mollis condimentum rhoncus. Morbi sollicitudin tellus a ligula luctus, ac varius arcu ullamcorper. Mauris in aliquet tellus, nec porttitor dui. Quisque interdum euismod mi sed bibendum. Vivamus non odio quis quam lacinia rhoncus in nec nibh. Integer vitae turpis condimentum, laoreet diam nec viverra fusce.&nbsp; <br></p>\n[/html]', 1, 1371420000, 1, 1, '', '0', '', 'default', 9999, NULL, 'about-me', 'About Me', '[html]<p>Quisque felis quam, sollicitudin in justo non, maximus sagittis ipsum. Aenean sodales tempus turpis, ut pulvinar orci sagittis a.</p>[/html]', '{e_THEME}voux/install/post8-1080x715.jpg', '', 'image-text-button', '0', '', ''),
(2, 'Article 2', 'article-2', 2, '', '', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nunc eget nulla rutrum fringilla sed vel nisl. Suspendisse at erat a neque pulvinar sodales. Etiam dictum erat erat. Pellentesque dictum convallis massa, eu varius sapien gravida a. Suspendisse auctor, mi a tempor tincidunt, lorem felis gravida libero, nec mattis eros felis eu neque. Etiam vel sagittis ipsum. Morbi at libero accumsan mauris tincidunt adipiscing sed vitae mauris. Aenean suscipit consectetur dignissim. Aliquam ornare diam vitae libero suscipit eget facilisis nisl ultrices? Curabitur luctus turpis ac lorem iaculis id interdum massa blandit! Curabitur placerat massa at neque accumsan porta. Nulla sed tortor id sapien dapibus auctor at eget mi. Sed ultrices lacinia viverra.Mauris in purus mauris. Nulla facilisi. Suspendisse dui enim, dapibus sed accumsan non, gravida eget nulla. Praesent ullamcorper, est ac viverra congue, nisl lacus imperdiet sem, et laoreet velit mauris sed leo. Donec erat mi, luctus quis suscipit pretium, luctus sed orci. Proin eu ultricies sem. Nam mollis turpis non erat fermentum congue.Nullam adipiscing, purus et varius blandit, arcu nisi pretium urna, a euismod eros eros quis turpis! Aliquam quis mi turpis, in varius neque. Aliquam erat volutpat. Vestibulum venenatis ipsum dapibus ante dictum egestas. Pellentesque eget nisi ligula, id accumsan eros. Aenean vitae felis vitae sapien mattis pellentesque non nec dolor. Nulla facilisi.Quisque in tortor turpis, sed venenatis nunc. Nunc tellus elit, suscipit et accumsan ac, mollis et risus. Phasellus consectetur sapien in felis semper non tempor tortor mollis. Ut id leo vel magna rhoncus aliquet. Nunc eget sollicitudin felis. Vestibulum tempor, justo et congue dignissim, augue ipsum malesuada libero, id suscipit felis mi vitae erat. Etiam suscipit lacinia sapien, ac gravida nisi lobortis non. Suspendisse dictum risus in est egestas egestas. Aenean et nisi sed odio sollicitudin placerat vel ut magna. Nulla facilisi. Proin condimentum ultricies vulputate. Morbi dapibus elit a tellus elementum congue! In vitae aliquet leo. Proin tempus tincidunt magna, sit amet malesuada ipsum ornare sed. Sed lorem augue, aliquam sit amet hendrerit sed; venenatis in massa. Sed iaculis amet.', 1, 1366149600, 0, 0, '', '0', '', 'default', 9999, NULL, 'jumbotron-menu-2', 'Heading 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor egestas condimentum. Suspendisse placerat nunc orci, a ultrices tortor eleifend in. Vestibulum tincidunt fringilla malesuada? Phasellus dolor risus, aliquam eu odio quis, mattis cursus magna. Integer ut blandit purus; vitae posuere ante. Vivamus sapien nisl, pulvinar vel turpis a, malesuada vehicula lorem! Curabitur magna justo; laoreet at congue sit amet, tincidunt sit amet erat. Integer vehicula eros quis odio tincidunt, nec dapibus sem molestie. Cras sed viverra eros. Nulla ut lectus tellus.', '', '', 'button', '0', '', ''),
(3, 'Article 3', 'article-3', 2, '', '', '', '[html]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor a justo ut tristique. Nam molestie sem at leo lobortis, vel luctus ligula tempus. Sed sagittis rutrum lectus vel suscipit. Sed in ligula vitae massa sagittis adipiscing vitae vel sem. Fusce nec rhoncus purus. Aenean mollis magna tellus; non consequat leo feugiat eu. Donec mauris velit, euismod nec facilisis quis, hendrerit nec lorem. Aliquam et lorem sed enim tempus sodales. Vestibulum ut enim adipiscing ipsum semper eleifend in in dolor. Fusce tempor risus velit, in fringilla tellus faucibus eget. Maecenas aliquet nunc nec nulla auctor, sed tristique est pellentesque. Maecenas tristique blandit dolor, nec egestas ligula aliquam eu.<br><br>Morbi porta leo iaculis, hendrerit lorem interdum, porta dui. Integer tempor convallis quam, eget tempus neque blandit sit amet. Quisque dictum libero elit, ut vehicula lectus accumsan a. Nam laoreet vulputate massa vel viverra. Sed tempus blandit sapien, in viverra urna aliquet quis. Aliquam erat volutpat. Nulla accumsan posuere.[/html]', 1, 1336600800, 0, 0, '', '0', '', 'default', 9999, NULL, 'jumbotron-menu-3', 'Heading 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor egestas condimentum. Suspendisse placerat nunc orci, a ultrices tortor eleifend in. Vestibulum tincidunt fringilla malesuada? Phasellus dolor risus, aliquam eu odio quis, mattis cursus magna. Integer ut blandit purus; vitae posuere ante. Vivamus sapien nisl, pulvinar vel turpis a, malesuada vehicula lorem! Curabitur magna justo; laoreet at congue sit amet, tincidunt sit amet erat. Integer vehicula eros quis odio tincidunt, nec dapibus sem molestie. Cras sed viverra eros. Nulla ut lectus tellus.', '', '', 'button', '0', '', ''),
(4, 'Feature 1', 'feature-1', 2, '', '', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor a justo ut tristique. Nam molestie sem at leo lobortis, vel luctus ligula tempus. Sed sagittis rutrum lectus vel suscipit. Sed in ligula vitae massa sagittis adipiscing vitae vel sem. Fusce nec rhoncus purus. Aenean mollis magna tellus; non consequat leo feugiat eu. Donec mauris velit, euismod nec facilisis quis, hendrerit nec lorem. Aliquam et lorem sed enim tempus sodales. Vestibulum ut enim adipiscing ipsum semper eleifend in in dolor. Fusce tempor risus velit, in fringilla tellus faucibus eget. Maecenas aliquet nunc nec nulla auctor, sed tristique est pellentesque. Maecenas tristique blandit dolor, nec egestas ligula aliquam eu.\n\nMorbi porta leo iaculis, hendrerit lorem interdum, porta dui. Integer tempor convallis quam, eget tempus neque blandit sit amet. Quisque dictum libero elit, ut vehicula lectus accumsan a. Nam laoreet vulputate massa vel viverra. Sed tempus blandit sapien, in viverra urna aliquet quis. Aliquam erat volutpat. Nulla accumsan posuere.', 1, 1344549600, 0, 0, '', '0', '', 'default', 9999, NULL, 'feature-menu-1', 'Modern Business Feature Menu 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis odio sit amet mi consequat varius. Nullam fringilla sodales lacus id mollis. Morbi fermentum turpis quis orci scelerisque, non pellentesque dolor sodales. Nullam luctus ut tellus quis ullamcorper! Suspendisse convallis tortor nec semper condimentum. Proin adipiscing adipiscing elit, ut posuere mauris consequat sed. Maecenas ultrices nisi tortor, sed vehicula urna auctor euismod?', '', '', '2-column_1:1_text-left', '0', '', ''),
(5, 'Feature 2', 'feature-2', 2, '', '', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor a justo ut tristique. Nam molestie sem at leo lobortis, vel luctus ligula tempus. Sed sagittis rutrum lectus vel suscipit. Sed in ligula vitae massa sagittis adipiscing vitae vel sem. Fusce nec rhoncus purus. Aenean mollis magna tellus; non consequat leo feugiat eu. Donec mauris velit, euismod nec facilisis quis, hendrerit nec lorem. Aliquam et lorem sed enim tempus sodales. Vestibulum ut enim adipiscing ipsum semper eleifend in in dolor. Fusce tempor risus velit, in fringilla tellus faucibus eget. Maecenas aliquet nunc nec nulla auctor, sed tristique est pellentesque. Maecenas tristique blandit dolor, nec egestas ligula aliquam eu.\n\nMorbi porta leo iaculis, hendrerit lorem interdum, porta dui. Integer tempor convallis quam, eget tempus neque blandit sit amet. Quisque dictum libero elit, ut vehicula lectus accumsan a. Nam laoreet vulputate massa vel viverra. Sed tempus blandit sapien, in viverra urna aliquet quis. Aliquam erat volutpat. Nulla accumsan posuere.', 1, 1347228000, 0, 0, '', '0', '', 'default', 9999, NULL, 'feature-menu-2', 'Modern Business Feature Menu 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis odio sit amet mi consequat varius. Nullam fringilla sodales lacus id mollis. Morbi fermentum turpis quis orci scelerisque, non pellentesque dolor sodales. Nullam luctus ut tellus quis ullamcorper! Suspendisse convallis tortor nec semper condimentum. Proin adipiscing adipiscing elit, ut posuere mauris consequat sed. Maecenas ultrices nisi tortor, sed vehicula urna auctor euismod?', '', '', '2-column_1:1_text-right', '0', '', ''),
(6, 'Feature 3', 'feature-3', 2, '', '', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor a justo ut tristique. Nam molestie sem at leo lobortis, vel luctus ligula tempus. Sed sagittis rutrum lectus vel suscipit. Sed in ligula vitae massa sagittis adipiscing vitae vel sem. Fusce nec rhoncus purus. Aenean mollis magna tellus; non consequat leo feugiat eu. Donec mauris velit, euismod nec facilisis quis, hendrerit nec lorem. Aliquam et lorem sed enim tempus sodales. Vestibulum ut enim adipiscing ipsum semper eleifend in in dolor. Fusce tempor risus velit, in fringilla tellus faucibus eget. Maecenas aliquet nunc nec nulla auctor, sed tristique est pellentesque. Maecenas tristique blandit dolor, nec egestas ligula aliquam eu.\n\nMorbi porta leo iaculis, hendrerit lorem interdum, porta dui. Integer tempor convallis quam, eget tempus neque blandit sit amet. Quisque dictum libero elit, ut vehicula lectus accumsan a. Nam laoreet vulputate massa vel viverra. Sed tempus blandit sapien, in viverra urna aliquet quis. Aliquam erat volutpat. Nulla accumsan posuere.', 1, 1349820000, 0, 0, '', '0', '', 'default', 9999, NULL, 'feature-menu-3', '&#039;Modern Business&#039; is a ready-to-use, Bootstrap 3 updated, multi-purpose HTML theme!', 'For more templates and more page options that you can integrate into this website template, visit Start Bootstrap!', '', '', '2-column_2:1_text-left', '0', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_page_chapters`
--

CREATE TABLE `e107nu_page_chapters` (
  `chapter_id` int(4) UNSIGNED NOT NULL,
  `chapter_parent` int(4) UNSIGNED NOT NULL DEFAULT '0',
  `chapter_name` varchar(200) NOT NULL DEFAULT '',
  `chapter_sef` varchar(200) NOT NULL DEFAULT '',
  `chapter_meta_description` text NOT NULL,
  `chapter_meta_keywords` varchar(255) NOT NULL DEFAULT '',
  `chapter_manager` tinyint(3) UNSIGNED NOT NULL DEFAULT '254',
  `chapter_icon` varchar(250) NOT NULL DEFAULT '',
  `chapter_image` varchar(250) NOT NULL DEFAULT '',
  `chapter_order` int(6) UNSIGNED NOT NULL DEFAULT '0',
  `chapter_template` varchar(50) NOT NULL DEFAULT '',
  `chapter_visibility` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `chapter_fields` mediumtext
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_plugin`
--

CREATE TABLE `e107nu_plugin` (
  `plugin_id` int(10) UNSIGNED NOT NULL,
  `plugin_name` varchar(100) NOT NULL DEFAULT '',
  `plugin_version` varchar(10) NOT NULL DEFAULT '',
  `plugin_path` varchar(100) NOT NULL DEFAULT '',
  `plugin_installflag` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `plugin_addons` text NOT NULL,
  `plugin_category` varchar(100) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_plugin`
--

INSERT INTO `e107nu_plugin` (`plugin_id`, `plugin_name`, `plugin_version`, `plugin_path`, `plugin_installflag`, `plugin_addons`, `plugin_category`) VALUES
(1, 'LAN_PLUGIN_BANNER_NAME', '1.0', 'banner', 0, 'e_menu,e_shortcode,banner_sql', 'content'),
(2, 'LAN_PLUGIN__BLANK_NAME', '2.0', '_blank', 0, 'e_admin,e_cron,e_notify,e_print,e_frontpage,e_menu,e_search,e_shortcode,e_event,e_dashboard,e_header,e_url,e_sitelink,e_parse,e_related,e_rss,e_user,e_library,_blank_sql', 'misc'),
(3, 'LAN_PLUGIN_CHATBOX_MENU_NAME', '1.0', 'chatbox_menu', 0, 'e_notify,e_list,e_search,e_dashboard,e_header,e_rss,e_user,chatbox_sql', 'content'),
(4, 'Contact', '1.0', 'contact', 1, 'e_url', 'menu'),
(5, 'LAN_PLUGIN_DOWNLOAD_NAME', '1.2', 'download', 0, 'e_cron,e_notify,e_list,e_frontpage,e_search,e_dashboard,e_tagwords,e_url,e_sitelink,e_rss,e_upload,e_gsitemap,download_sql', 'content'),
(6, 'LAN_PLUGIN_FEATUREBOX_NAME', '1.1', 'featurebox', 0, 'e_shortcode,e_header,e_rss,featurebox_sql', 'content'),
(7, 'LAN_PLUGIN_FORUM_NAME', '2.1', 'forum', 0, 'e_notify,e_linkgen,e_list,e_meta,e_emailprint,e_frontpage,e_menu,e_search,e_event,e_dashboard,e_url,e_rss,e_user,e_gsitemap,forum_sql', 'content'),
(8, 'LAN_PLUGIN_GALLERY_TITLE', '1.1', 'gallery', 0, 'e_shortcode,e_header,e_url,e_library', 'content'),
(9, 'LAN_PLUGIN_GSITEMAP_NAME', '1.0', 'gsitemap', 0, 'e_cron,e_module,e_url,gsitemap_sql', 'misc'),
(10, 'LAN_PLUGIN_IMPORT_NAME', '1.0', 'import', 0, '', 'tools'),
(11, 'LAN_PLUGIN_LINKWORDS_NAME', '1.1', 'linkwords', 0, 'e_header,e_tohtml,linkwords_sql', 'content'),
(12, 'LAN_PLUGIN_LIST_NEW_NAME', '1.0.1', 'list_new', 0, '', 'content'),
(13, 'LAN_PLUGIN_LOG_NAME', '2.1', 'log', 0, 'e_meta,e_shortcode,e_url,log_sql', 'misc'),
(14, 'News', '1.0', 'news', 1, 'e_frontpage,e_menu,e_search,e_event,e_header,e_url,e_sitelink,e_featurebox,e_related,e_rss,e_gsitemap', 'menu'),
(15, 'LAN_PLUGIN_NEWSFEEDS_NAME', '2.0', 'newsfeed', 0, 'e_frontpage,e_url,newsfeed_sql', 'content'),
(16, 'Pages', '1.0', 'page', 1, 'e_frontpage,e_menu,e_search,e_shortcode,e_sitelink,e_related', 'menu'),
(17, 'LAN_PLUGIN_PM_NAME', '3.0', 'pm', 0, 'e_cron,e_shortcode,e_url,pm_sql', 'users'),
(18, 'LAN_PLUGIN_POLL_NAME', '2.0', 'poll', 0, 'poll_sql', 'content'),
(19, 'LAN_PLUGIN_RSS_NAME', '1.3', 'rss_menu', 1, 'e_meta,e_url,rss_sql', 'misc'),
(20, 'Siteinfo', '1.0', 'siteinfo', 1, 'e_shortcode', 'menu'),
(21, 'LAN_PLUGIN_SOCIAL_NAME', '1.0', 'social', 1, 'e_admin,e_shortcode,e_module,e_event,e_comment', 'settings'),
(22, 'LAN_PLUGIN_TAGCLOUD_NAME', '1.3', 'tagcloud', 0, 'e_menu,e_header', 'misc'),
(23, 'TinyMce4', '1.0', 'tinymce4', 1, 'e_header,e_footer', 'misc'),
(24, 'LAN_PLUGIN_TRACKBACK_NAME', '1.1', 'trackback', 0, 'e_admin,e_meta,trackback_sql', 'misc'),
(25, 'LAN_PLUGIN_USER_NAME', '1.0', 'user', 1, 'e_search,e_dashboard,e_mailout,e_user', 'misc');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_rate`
--

CREATE TABLE `e107nu_rate` (
  `rate_id` int(10) UNSIGNED NOT NULL,
  `rate_table` varchar(100) NOT NULL DEFAULT '',
  `rate_itemid` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `rate_rating` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `rate_votes` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `rate_voters` text NOT NULL,
  `rate_up` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `rate_down` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_rss`
--

CREATE TABLE `e107nu_rss` (
  `rss_id` int(10) UNSIGNED NOT NULL,
  `rss_name` varchar(255) NOT NULL DEFAULT '',
  `rss_url` text NOT NULL,
  `rss_topicid` varchar(255) NOT NULL DEFAULT '',
  `rss_path` varchar(255) NOT NULL DEFAULT '',
  `rss_text` longtext NOT NULL,
  `rss_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `rss_class` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `rss_limit` tinyint(3) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_rss`
--

INSERT INTO `e107nu_rss` (`rss_id`, `rss_name`, `rss_url`, `rss_topicid`, `rss_path`, `rss_text`, `rss_datestamp`, `rss_class`, `rss_limit`) VALUES
(1, 'News', 'news', '', 'news', 'The rss feed of news', 1618643230, 0, 9);

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_session`
--

CREATE TABLE `e107nu_session` (
  `session_id` varchar(250) NOT NULL DEFAULT '',
  `session_expires` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `session_user` int(10) UNSIGNED DEFAULT NULL,
  `session_data` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_session`
--

INSERT INTO `e107nu_session` (`session_id`, `session_expires`, `session_user`, `session_data`) VALUES
('2fe631b2e76b1b8fd5858551082c53a4', 1618644862, NULL, 'ZTEwN3Nlc3N8YToxMTI6e3M6MjI6Il9zZXNzaW9uX3ZhbGlkYXRlX2RhdGEiO2E6NDp7czoxMDoiUmVtb3RlQWRkciI7czoxNDoiMTgzLjgzLjEzNC4xNDYiO3M6NzoiSHR0cFZpYSI7czowOiIiO3M6MTc6Ikh0dHBYRm9yd2FyZGVkRm9yIjtzOjA6IiI7czoxMzoiSHR0cFVzZXJBZ2VudCI7czoxMzE6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84OS4wLjQzODkuMTI4IFNhZmFyaS81MzcuMzYgRWRnLzg5LjAuNzc0Ljc3Ijt9czoxMzoibGFuZ3VhZ2UtbGlzdCI7TjtzOjk6ImNoYWxsZW5nZSI7czo0MDoiNTAzNTk3ZWMxYmEzMTU2NzQ0NDdhN2NlZjc1MGE0Y2FlODI0MzUxOCI7czoxNzoicHJldnByZXZjaGFsbGVuZ2UiO3M6NDA6IjUwMzU5N2VjMWJhMzE1Njc0NDQ3YTdjZWY3NTBhNGNhZTgyNDM1MTgiO3M6MTM6InByZXZjaGFsbGVuZ2UiO3M6NDA6IjUwMzU5N2VjMWJhMzE1Njc0NDQ3YTdjZWY3NTBhNGNhZTgyNDM1MTgiO3M6ODoidWJyb3dzZXIiO3M6MzI6IjdjNDI1OTczYzAwODhjNTliMTk2NmU4NGY3NWIzYTE4IjtzOjEyOiJfX2Zvcm1fdG9rZW4iO3M6NTU6IjMxZDQ5NjA4NTQ3OWFhYTJmYTRkZmMyZDdmYjZmOTRkNjA3YTg5NGU4MmQzNzMuNzE0NDE1MzIiO3M6MTY6Il9zeXN0ZW1fbWVzc2FnZXMiO2E6NTp7czo1OiJlcnJvciI7YTowOnt9czo3OiJ3YXJuaW5nIjthOjA6e31zOjc6InN1Y2Nlc3MiO2E6MDp7fXM6NDoiaW5mbyI7YTowOnt9czo1OiJkZWJ1ZyI7YTowOnt9fXM6MTk6Il9wcmV2aW91c1VybF9leHBpcmUiO2k6MTYxODY0MzcxOTtzOjEyOiJfcHJldmlvdXNVcmwiO3M6MjI2OiIvYWlreWFuZXcvZTEwN19hZG1pbi90aGVtZS5waHA/bW9kZT1tYWluJmlmcmFtZT0xJmFjdGlvbj1kb3dubG9hZCZzcmM9YVdROU9EZ3pKblZ5YkQxb2RIUndjeVV6UVNVeVJpVXlSbVV4TURjdWIzSm5KVEpHWlRFd04xOXdiSFZuYVc1ekpUSkdZV1JrYjI1ekpUSkdZV1JrYjI1ekxuQm9jQ1V6Um1sa0pUTkVPRGd6SlRJMllXMXdKVE5DYlc5a1lXd2xNMFF4Sm0xdlpHVTlZV1JrYjI0bWNISnBZMlU5IjtzOjIxOiJhZGRvbnMtdXBkYXRlLWNoZWNrZWQiO2I6MTtzOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzk3OCI7YToxNjp7czoyOiJpZCI7czozOiI5NzgiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTg6IlNreUFwcCBCb290c3RyYXAgNCI7czo4OiJjYXRlZ29yeSI7czo3OiJnZW5lcmljIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6NzU6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwOTc4X3NreWFwcF9wcmV2aWV3LnBuZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAyMS0wMS0xOCI7czo3OiJ2ZXJzaW9uIjtzOjU6IjIuMC4xIjtzOjk6InRodW1ibmFpbCI7czo5OToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5Nzhfc2t5YXBwX3ByZXZpZXcucG5nIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9OTc4JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo2OiJKaW1ha28iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjU6IjIuMy4xIjtzOjExOiJkZXNjcmlwdGlvbiI7czo5MjoiU2t5QXBwIFNpbXBsZSBIVE1MNSBCb29zdHJhcCA0IHRoZW1lIGZvciB0aGUgZnJvbnRlbmQgaW5zaXBpcmVkIGJ5IHRlbXBsYXRlIGJ5IEJyYWQgVHJhdmVyc3kiO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtOO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzg5OCI7YToxNjp7czoyOiJpZCI7czozOiI4OTgiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NDoiVm91eCI7czo4OiJjYXRlZ29yeSI7czo0OiJibG9nIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6Njg6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODk4X3ByZXZpZXcuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDE3LTEwLTIyIjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czo5MjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4OThfcHJldmlldy5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD04OTgmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjg6ImUxMDcgSW5jIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czo0ODoiQSByZXNwb25zaXZlIGJvb3RzdHJhcCBibG9nIHRoZW1lIGJ5IFRoZW1lRXhwb3NlIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzg5NiI7YToxNjp7czoyOiJpZCI7czozOiI4OTYiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTA6IkJTIEJsb2cgMDIiO3M6ODoiY2F0ZWdvcnkiO3M6NDoiYmxvZyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjY4OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDg5Nl9wcmV2aWV3LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxNy0wOS0xNyI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMCI7czo5OiJ0aHVtYm5haWwiO3M6OTI6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODk2X3ByZXZpZXcuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9ODk2JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo0OiJmaXppIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czo1NDoiQlMgQmxvZyAwMiBib290c3RyYXAgMyB0aGVtZSB3aXRoIElzb3RvcGUgZ3JpZCBsYXlvdXQuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzg4MyI7YToxNjp7czoyOiJpZCI7czozOiI4ODMiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTI6IkJTIEdhbWUgUGx1cyI7czo4OiJjYXRlZ29yeSI7czo2OiJnYW1pbmciO3M6NzoicHJldmlldyI7YToxOntpOjA7czo2ODoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4ODNfcHJldmlldy5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTctMDQtMjYiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjkyOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDg4M19wcmV2aWV3LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTg4MyZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NDoiZml6aSI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMiI7czoxMToiZGVzY3JpcHRpb24iO3M6MzA6IkJTIEdhbWUgUGx1cyBib290c3RyYXAgMyB0aGVtZSI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS84ODEiO2E6MTY6e3M6MjoiaWQiO3M6MzoiODgxIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjE0OiJCUyBNYWdhemluZSAwMiI7czo4OiJjYXRlZ29yeSI7czo0OiJuZXdzIjtzOjc6InByZXZpZXciO2E6Mjp7aTowO3M6Njg6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODgxX3ByZXZpZXcuanBnIjtpOjE7czo3MzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4ODFfcHJldmlld19mdWxsLmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxNy0wNC0yNiI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMCI7czo5OiJ0aHVtYm5haWwiO3M6OTI6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODgxX3ByZXZpZXcuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9ODgxJmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo0OiJmaXppIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czo0MzoiQSBtYWdhemluZSBib290c3RyYXAgMyByZXNwb25zaXZlIHRlbXBsYXRlLiI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS84NjQiO2E6MTY6e3M6MjoiaWQiO3M6MzoiODY0IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjExOiJCYXNpYy1MaWdodCI7czo4OiJjYXRlZ29yeSI7czo3OiJnZW5lcmljIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6Nzc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODY0X3ByZXZpZXdfZnJvbnRlbmQucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDE3LTAxLTI5IjtzOjc6InZlcnNpb24iO3M6MzoiMS4yIjtzOjk6InRodW1ibmFpbCI7czoxMDE6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODY0X3ByZXZpZXdfZnJvbnRlbmQucG5nIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9ODY0JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo3OiJtY3BlYWNlIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czozNjoiQmFzaWMgQm9vdHN0cmFwIDMgdGhlbWUgZm9yIGUxMDcgdi4yIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzk4MSI7YToxNjp7czoyOiJpZCI7czozOiI5ODEiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NjoiQWdlbmN5IjtzOjg6ImNhdGVnb3J5IjtzOjc6ImdlbmVyaWMiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo3NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5ODFfcHJldmlld19mcm9udGVuZC5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMjEtMDEtMjEiO3M6NzoidmVyc2lvbiI7czo1OiIyLjEuMCI7czo5OiJ0aHVtYm5haWwiO3M6MTAxOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk4MV9wcmV2aWV3X2Zyb250ZW5kLmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTk4MSZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6ODoiZTEwNyBJbmMiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjU6IjIuMy4xIjtzOjExOiJkZXNjcmlwdGlvbiI7czoyMjc6IkFnZW5jeSBpcyBhbiBhZ2VuY3kgcG9ydGZvbGlvIHRoZW1lIGZvciBCb290c3RyYXAgY3JlYXRlZCBieSBTdGFydCBCb290c3RyYXAuIFRoaXMgdGhlbWUgZmVhdHVyZXMgc2V2ZXJhbCBjb250ZW50IHNlY3Rpb25zLCBhIHJlc3BvbnNpdmUgcG9ydGZvbGlvIGdyaWQgd2l0aCBob3ZlciBlZmZlY3RzLCBmdWxsIHBhZ2UgcG9ydGZvbGlvIGl0ZW0gbW9kYWxzLCBhIHJlc3BvbnNpdmUgdGltZWxpbmUuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7Tjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS85ODAiO2E6MTY6e3M6MjoiaWQiO3M6MzoiOTgwIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjk6IlJpZGVCbHVlMiI7czo4OiJjYXRlZ29yeSI7czo3OiJnZW5lcmljIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6Nzg6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwOTgwX3JpZGVibHVlMl9wcmV2aWV3LnBuZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAyMS0wMS0yMSI7czo3OiJ2ZXJzaW9uIjtzOjU6IjIuMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMDI6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwOTgwX3JpZGVibHVlMl9wcmV2aWV3LnBuZyI7czozOiJ1cmwiO3M6NjU6Imh0dHBzOi8vd3d3LmUxMDdzay5jb20vZWFzeXN0b3JlL2UxMDctdGhlbWVzL2UxMDctcmlkZWJsdWUyLXRoZW1lIjtzOjY6ImF1dGhvciI7czo2OiJKaW1ha28iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjU6IjIuMy4xIjtzOjExOiJkZXNjcmlwdGlvbiI7czo0NToiUmlkZUJsdWUgdGhlbWUgYnkgdmVza290byB3aXRoIGUxMDcgQm9vdHN0cmFwIjtzOjU6InByaWNlIjtzOjExOiImZXVybzsxMC4wMCI7czo4OiJsaXZlZGVtbyI7Tjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS85NzciO2E6MTY6e3M6MjoiaWQiO3M6MzoiOTc3IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjEwOiJGcmVlbGFuY2VyIjtzOjg6ImNhdGVnb3J5IjtzOjc6ImdlbmVyaWMiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo3OToiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5NzdfZnJlZWxhbmNlcl9wcmV2aWV3LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAyMS0wMS0xOCI7czo3OiJ2ZXJzaW9uIjtzOjM6IjQuMiI7czo5OiJ0aHVtYm5haWwiO3M6MTAzOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk3N19mcmVlbGFuY2VyX3ByZXZpZXcuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9OTc3JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo2OiJKaW1ha28iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjU6IjIuMy4xIjtzOjExOiJkZXNjcmlwdGlvbiI7czo4NjoiZTEwNyBCb290c3RyYXAgNCB0aGVtZSBiYXNlZCBvbiBmcmVlbGFuY2VyIHBvcnRmb2xpbyB0aGVtZSBjcmVhdGVkIGJ5IFN0YXJ0IEJvb3RzdHJhcC4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtOO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzk3MyI7YToxNjp7czoyOiJpZCI7czozOiI5NzMiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NjoiSGVzdGlhIjtzOjg6ImNhdGVnb3J5IjtzOjk6ImNvcnBvcmF0ZSI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjc3OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk3M19oZXN0aWFfcHJldmlldzAxLmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAyMC0xMS0xMyI7czo3OiJ2ZXJzaW9uIjtzOjM6IjIuMCI7czo5OiJ0aHVtYm5haWwiO3M6MTAxOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk3M19oZXN0aWFfcHJldmlldzAxLmpwZyI7czozOiJ1cmwiO3M6NTA6Imh0dHBzOi8vd3d3LmUxMDdzay5jb20vZWFzeXN0b3JlL2hlc3RpYS1lMTA3LXRoZW1lIjtzOjY6ImF1dGhvciI7czo2OiJKaW1ha28iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjU6IjIuMy4wIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxMTk6Ikhlc3RpYSBpcyBEYXJrIGUxMDcgQm9vdHN0cmFwIHRoZW1lIGNvbXBhdGlibGUgd2l0aCBHYWlhIHRoZW1lLiBVcGRhdGVkIGZvciBIVE1MIGxheW91dHMgc3VwcG9ydGVkIGJ5IGUxMDcgMi4zIHZlcnNpb24uIjtzOjU6InByaWNlIjtzOjExOiImZXVybzsxMC4wMCI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzk3MiI7YToxNjp7czoyOiJpZCI7czozOiI5NzIiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NToiU29saWQiO3M6ODoiY2F0ZWdvcnkiO3M6NzoiZ2VuZXJpYyI7czo3OiJwcmV2aWV3IjthOjI6e2k6MDtzOjc3OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk3Ml9wcmV2aWV3X2Zyb250ZW5kLnBuZyI7aToxO3M6Nzk6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwOTcyX3ByZXZpZXdfcmVzcG9uc2l2ZS5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMjAtMTAtMjAiO3M6NzoidmVyc2lvbiI7czo1OiIyLjQuMCI7czo5OiJ0aHVtYm5haWwiO3M6MTAxOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk3Ml9wcmV2aWV3X2Zyb250ZW5kLnBuZyI7czozOiJ1cmwiO3M6NTA6Imh0dHBzOi8vd3d3LmUxMDdzay5jb20vZWFzeXN0b3JlL2UxMDctc29saWQtdGhlbWUvIjtzOjY6ImF1dGhvciI7czo2OiJKaW1ha28iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjU6IjIuMy4wIjtzOjExOiJkZXNjcmlwdGlvbiI7czoyMzA6Ik9yaWdpbmFsIFNvbGlkIHRoZW1lIGlzIGEgNyBwYWdlcyB0aGVtZSBpZGVhbCBmb3Igd2ViIGFnZW5jaWVzIGFuZCBmcmVlbGFuY2Vycy4gVXNlcyBGb250IEF3ZXNvbWUsIE1hc29ucnkgSmF2YXNjcmlwdCwgUHJldHR5UGhvdG8gbGlnaHRib3ggYW5kIG5pY2UgaG92ZXIgZWZmZWN0cyB0aGFua3MgQ29kcm9wcy4gV2l0aCBlMTA3IGl0IGNhbiBiZSBtdWx0aXBhZ2Ugc2l0ZSBmb3IgYW55IHB1cnBvc2UuIjtzOjU6InByaWNlIjtzOjExOiImZXVybzsxMC4wMCI7czo4OiJsaXZlZGVtbyI7Tjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS85NzEiO2E6MTY6e3M6MjoiaWQiO3M6MzoiOTcxIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjE0OiJMYW5kaW5nIFplcm8gMiI7czo4OiJjYXRlZ29yeSI7czo3OiJnZW5lcmljIjtzOjc6InByZXZpZXciO2E6Mzp7aTowO3M6NzY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwOTcxX3ByZXZpZXdfZGVmYXVsdC5qcGciO2k6MTtzOjc1OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk3MV9wcmV2aWV3X29yYW5nZS5qcGciO2k6MjtzOjc0OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk3MV9wcmV2aWV3X2dyZWVuLmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAyMC0xMC0yMCI7czo3OiJ2ZXJzaW9uIjtzOjU6IjEuNC4xIjtzOjk6InRodW1ibmFpbCI7czoxMDA6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwOTcxX3ByZXZpZXdfZGVmYXVsdC5qcGciO3M6MzoidXJsIjtzOjU0OiJodHRwczovL3d3dy5lMTA3c2suY29tL2Vhc3lzdG9yZS9sYW5kaW5nLXplcm8tMi10aGVtZS8iO3M6NjoiYXV0aG9yIjtzOjY6IkppbWFrbyI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6NToiMi4zLjAiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjUyOiJJbnNwaXJlZCBieSBMYW5kaW5nIFplcm8gVGhlbWUgYnkgYm9vdHN0cmFwemVyby5jb20uIjtzOjU6InByaWNlIjtzOjExOiImZXVybzsxMC4wMCI7czo4OiJsaXZlZGVtbyI7Tjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS85NjMiO2E6MTY6e3M6MjoiaWQiO3M6MzoiOTYzIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjc6ImtoYXRydTIiO3M6ODoiY2F0ZWdvcnkiO3M6NzoiZ2VuZXJpYyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjY4OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk2M19wcmV2aWV3LnBuZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAyMC0wNS0yMSI7czo3OiJ2ZXJzaW9uIjtzOjM6IjIuMSI7czo5OiJ0aHVtYm5haWwiO3M6OTI6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwOTYzX3ByZXZpZXcucG5nIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9OTYzJmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo2OiJKaW1ha28iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjM6IjIuMCI7czoxMToiZGVzY3JpcHRpb24iO3M6NjY6ImtoYXRydSB0aGVtZSBieSBTdGV2ZSBEdW5zdGFuIHdpdGggYm9vdHN0cmFwIHJlc3BvbnNpdmVuZXNzIGFkZGVkLiI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS85NTkiO2E6MTY6e3M6MjoiaWQiO3M6MzoiOTU5IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjExOiJlV0wgRGVmYXVsdCI7czo4OiJjYXRlZ29yeSI7czo2OiJnYW1pbmciO3M6NzoicHJldmlldyI7YToxOntpOjA7czo3NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5NTlfcHJldmlld19mcm9udGVuZC5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMjAtMDQtMjciO3M6NzoidmVyc2lvbiI7czozOiIxLjUiO3M6OToidGh1bWJuYWlsIjtzOjEwMToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5NTlfcHJldmlld19mcm9udGVuZC5wbmciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD05NTkmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjg6Ikxhb2NoZVhlIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czozOiIyLjAiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjcyOiJNYWluIFRoZW1lIGZyb20gZVdhcnJpb3IgTGVhZ3VlcywgKE9sZCBTdHlsZSkgdGhhdCB3YXMgdXNlZCBiYWNrIGluIDIwMTIiO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtOO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzk1NyI7YToxNjp7czoyOiJpZCI7czozOiI5NTciO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NToiSmF5eWEiO3M6ODoiY2F0ZWdvcnkiO3M6NzoiZ2VuZXJpYyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjY4OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk1N19wcmV2aWV3LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAyMC0wMi0yNCI7czo3OiJ2ZXJzaW9uIjtzOjU6IjIuMi40IjtzOjk6InRodW1ibmFpbCI7czo5MjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5NTdfcHJldmlldy5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD05NTcmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjY6IkRlbHRpayI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MzoiMi4wIjtzOjExOiJkZXNjcmlwdGlvbiI7czo0MzoiQ2xhc3NpYyBlMTA3IHRoZW1lIG5vdyBtYWludGFpbmVkIGJ5IERlbHRpayI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO047fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvOTU2IjthOjE2OntzOjI6ImlkIjtzOjM6Ijk1NiI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoyMDoiQ2FsbCBvZiBEdXR5OiBHaG9zdHMiO3M6ODoiY2F0ZWdvcnkiO3M6NzoiZ2VuZXJpYyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjY4OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk1Nl9wcmV2aWV3LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxOS0xMS0wNiI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMCI7czo5OiJ0aHVtYm5haWwiO3M6OTI6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwOTU2X3ByZXZpZXcuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9OTU2JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo2OiJKaW1ha28iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjU6IjIuMy4wIjtzOjExOiJkZXNjcmlwdGlvbiI7czo4MzoiT3JpZ2luYWwgYXV0aG9yOiBDc2FTenkgZnJvbSBjc2FzenkuaHUgZnJvbSAyMDEzLjEyLiBCYXNpYyBVcGRhdGUgZm9yIEhUTUwgbGF5b3V0cy4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvOTU0IjthOjE2OntzOjI6ImlkIjtzOjM6Ijk1NCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxMToiSW5mYWRlQmxhY2siO3M6ODoiY2F0ZWdvcnkiO3M6NzoiZ2VuZXJpYyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjY4OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk1NF9wcmV2aWV3LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxOS0xMS0wNiI7czo3OiJ2ZXJzaW9uIjtzOjU6IjIuMS4wIjtzOjk6InRodW1ibmFpbCI7czo5MjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5NTRfcHJldmlldy5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD05NTQmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjY6IkppbWFrbyI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6NToiMi4zLjAiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjYyOiJPcmlnaW5hbCBhdXRob3IgbmFtZSBhZGRlZCB0byB0aGVtZSBuYW1lIHRvIHJlc3BlY3QgdGhlaXIgd29yayI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS85NTAiO2E6MTY6e3M6MjoiaWQiO3M6MzoiOTUwIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjQ6IkdhaWEiO3M6ODoiY2F0ZWdvcnkiO3M6NzoiZ2VuZXJpYyI7czo3OiJwcmV2aWV3IjthOjQ6e2k6MDtzOjczOiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk1MF9nYWlhX2NvbG9yZWQuanBnIjtpOjE7czo3NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5NTBfcHJldmlld19mcm9udGVuZC5wbmciO2k6MjtzOjc5OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk1MF9wcmV2aWV3X3Jlc3BvbnNpdmUucG5nIjtpOjM7czo3NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5NTBfZ2FpYV9saWdodF9mcmVlbi5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTktMTAtMTIiO3M6NzoidmVyc2lvbiI7czozOiIyLjUiO3M6OToidGh1bWJuYWlsIjtzOjk3OiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDk1MF9nYWlhX2NvbG9yZWQuanBnIjtzOjM6InVybCI7czo3NDoiaHR0cHM6Ly93d3cuZTEwN3NrLmNvbS9lYXN5c3RvcmUvZnVsbC1wYWNrL2dhaWEtcHJvLWUxMDctdGhlbWUtZnVsbC1wYWNrLTMiO3M6NjoiYXV0aG9yIjtzOjY6IkppbWFrbyI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6NToiMi4yLjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjE1OToiR2FpYSBpcyBlMTA3IEJvb3RzdHJhcCB0aGVtZSBiYXNlIG9uIEhUTUwgR2FpYSBQcm8gdGhlbWUgYnkgY3JlYXRpdmUtdGltIGluIG1hbnkgY29sb3VycyB2YXJpYW50cy4gVGhpcyB0aGVtZSByZXF1aXJlcyAyIGN1c3RvbSBwbHVnaW5zIGZvciBmdWxsIGZ1bmN0aW9uYWxpdHkuIjtzOjU6InByaWNlIjtzOjExOiImZXVybzs0NS4wMCI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzkzNCI7YToxNjp7czoyOiJpZCI7czozOiI5MzQiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6ODoiT3Blbk1pbmQiO3M6ODoiY2F0ZWdvcnkiO3M6NzoiZ2VuZXJpYyI7czo3OiJwcmV2aWV3IjthOjI6e2k6MDtzOjc3OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDkzNF9wcmV2aWV3X2Zyb250ZW5kLmpwZyI7aToxO3M6Nzk6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwOTM0X3ByZXZpZXdfcmVzcG9uc2l2ZS5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTktMDQtMjIiO3M6NzoidmVyc2lvbiI7czo1OiIyLjIuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTAxOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDkzNF9wcmV2aWV3X2Zyb250ZW5kLmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTkzNCZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NjoiSmltYWtvIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxODY6IlRoZSBCb290c3RyYXAgMyB0aGVtZSBiYXNlZCBvbiBPcGVuTWluZCBIVE1MIHRoZW1lLiBUaGlzIHRoZW1lIGRlcGVuZHMgb24gdGhlIHBhaWQgcGx1Z2lucyBhbmQgbGljZW5jZWQgaHRtbCBhc3NldHMuIFRoZXkgYXJlIG5vdCBwYXJ0IG90IHRoaXMgcGFjay4gQ2hlY2sgYXZhaWxhYmxlIGRvY3VtZW50YXRpb24gZmlyc3QuICI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS85MzIiO2E6MTY6e3M6MjoiaWQiO3M6MzoiOTMyIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjEzOiJEZWZpYW50enN0cmFwIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImdhbWluZyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjc3OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDkzMl9wcmV2aWV3X2Zyb250ZW5kLnBuZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxOS0wMS0zMSI7czo3OiJ2ZXJzaW9uIjtzOjM6IjIuMiI7czo5OiJ0aHVtYm5haWwiO3M6MTAxOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDkzMl9wcmV2aWV3X2Zyb250ZW5kLnBuZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTkzMiZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6ODoiTGFvY2hlWGUiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjIiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjM5OiJBIGJvb3RzdHJhcCAzIHRoZW1lIGZvciBEZWZpYW50eiBHYW1pbmciO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtOO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzkyNCI7YToxNjp7czoyOiJpZCI7czozOiI5MjQiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NToiSmF5eWEiO3M6ODoiY2F0ZWdvcnkiO3M6NzoiZ2VuZXJpYyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjY4OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDkyNF9wcmV2aWV3LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxOC0xMC0yNCI7czo3OiJ2ZXJzaW9uIjtzOjU6IjIuMi4zIjtzOjk6InRodW1ibmFpbCI7czo5MjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5MjRfcHJldmlldy5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD05MjQmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjY6IkRlbHRpayI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMiI7czoxMToiZGVzY3JpcHRpb24iO3M6NDM6IkNsYXNzaWMgZTEwNyB0aGVtZSBub3cgbWFpbnRhaW5lZCBieSBEZWx0aWsiO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtOO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzkxOSI7YToxNjp7czoyOiJpZCI7czozOiI5MTkiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6Mjk6Ik5pZ2h0dmlzaW9uIEJvb3RzdHJhcCAzIHRoZW1lIjtzOjg6ImNhdGVnb3J5IjtzOjc6ImdlbmVyaWMiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo3NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA5MTlfcHJldmlld19mcm9udGVuZC5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTgtMDktMDMiO3M6NzoidmVyc2lvbiI7czo1OiIyLjIuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTAxOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDkxOV9wcmV2aWV3X2Zyb250ZW5kLnBuZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTkxOSZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NjoiSmltYWtvIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czo3MjoiTmlnaHR2aXNpb24gdGhlbWUgZnJvbSBGcmVlIENTUyBUZW1wbGF0ZXMgcG9ydGVkIGZvciBlMTA3LiBMaXRlIHZlcnNpb24uIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7Tjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS85MDYiO2E6MTY6e3M6MjoiaWQiO3M6MzoiOTA2IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjc6ImFnZW5jeTIiO3M6ODoiY2F0ZWdvcnkiO3M6NzoiZ2VuZXJpYyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjc3OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDkwNl9wcmV2aWV3X2Zyb250ZW5kLmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxNy0xMi0yOSI7czo3OiJ2ZXJzaW9uIjtzOjU6IjIuMC4wIjtzOjk6InRodW1ibmFpbCI7czoxMDE6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwOTA2X3ByZXZpZXdfZnJvbnRlbmQuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9OTA2JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo4OiJlMTA3IEluYyI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMiI7czoxMToiZGVzY3JpcHRpb24iO3M6MjMxOiJBZ2VuY3kgMiBpcyBhbiBhZ2VuY3kgcG9ydGZvbGlvIHRoZW1lIGZvciBCb290c3RyYXAgNCBjcmVhdGVkIGJ5IFN0YXJ0IEJvb3RzdHJhcC4gVGhpcyB0aGVtZSBmZWF0dXJlcyBzZXZlcmFsIGNvbnRlbnQgc2VjdGlvbnMsIGEgcmVzcG9uc2l2ZSBwb3J0Zm9saW8gZ3JpZCB3aXRoIGhvdmVyIGVmZmVjdHMsIGZ1bGwgcGFnZSBwb3J0Zm9saW8gaXRlbSBtb2RhbHMsIGEgcmVzcG9uc2l2ZSB0aW1lbGluZS4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvODk5IjthOjE2OntzOjI6ImlkIjtzOjM6Ijg5OSI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxMjoiTGFuZGluZyBaZXJvIjtzOjg6ImNhdGVnb3J5IjtzOjc6ImdlbmVyaWMiO3M6NzoicHJldmlldyI7YToyOntpOjA7czo3NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4OTlfcHJldmlld19kZWZhdWx0LmpwZyI7aToxO3M6NzY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODk5X3ByZXZpZXdfb25lcGFnZS5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTctMTAtMjIiO3M6NzoidmVyc2lvbiI7czozOiIyLjAiO3M6OToidGh1bWJuYWlsIjtzOjEwMDoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4OTlfcHJldmlld19kZWZhdWx0LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTg5OSZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6ODoiZTEwNyBJbmMiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjIiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjMzMToiTGFuZGluZyBaZXJvIFRoZW1lIGJ5IGJvb3RzdHJhcHplcm8uY29tIGlzIGEgZGV2aWNlLWFnbm9zdGljLCBtb2Rlcm4gcmVzcG9uc2l2ZSBkZXNpZ24gdGhhdCBpcyBjdXN0b21pemFibGUuIEl0J3MgZGVzaWduZWQgdG8gd29yayB3ZWxsIG9uIGRlc2t0b3BzLCBsYXB0b3BzLCB0YWJsZXRzIGFuZCBtb2JpbGUgcGhvbmVzLiBIb21lIHBhZ2UgY29udGFpbnMgYSB2aWRlbyBiYWNrZ3JvdW5kLiBUaGlzIHNpbmdsZS1wYWdlIEJvb3RzdHJhcCB0ZW1wbGF0ZSBoYXMgYSBzbGVlayBkYXJrZ3JleSBjb2xvciBzY2hlbWUsIGFjY2VudCBjb2xvciBhbmQgc21vb3RoIHNjcm9sbGluZy4gICI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS84OTMiO2E6MTY6e3M6MjoiaWQiO3M6MzoiODkzIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjEwOiJCUyBCbG9nIDAxIjtzOjg6ImNhdGVnb3J5IjtzOjQ6ImJsb2ciO3M6NzoicHJldmlldyI7YToxOntpOjA7czo2ODoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4OTNfcHJldmlldy5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTctMDktMDEiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjkyOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDg5M19wcmV2aWV3LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTg5MyZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NDoiZml6aSI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMiI7czoxMToiZGVzY3JpcHRpb24iO3M6NTQ6IkJTIEJsb2cgMDEgYm9vdHN0cmFwIDMgdGhlbWUgd2l0aCBNYXNvbnJ5IGdyaWQgbGF5b3V0LiI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS84ODUiO2E6MTY6e3M6MjoiaWQiO3M6MzoiODg1IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjEzOiJCbGFjayBOIFdoaXRlIjtzOjg6ImNhdGVnb3J5IjtzOjc6ImdlbmVyaWMiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo3NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4ODVfcHJldmlld19mcm9udGVuZC5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTctMDYtMjIiO3M6NzoidmVyc2lvbiI7czozOiIyLjAiO3M6OToidGh1bWJuYWlsIjtzOjEwMToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4ODVfcHJldmlld19mcm9udGVuZC5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD04ODUmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjY6IkppbWFrbyI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMiI7czoxMToiZGVzY3JpcHRpb24iO3M6MTU2OiJUaGlzIHRlbXBsYXRlIGlzIGZyZWUgZm9yIHBlcnNvbmFsIGFuZCBjb21tZXJjaWFsIHVzZSwgcGxlYXNlIGRvbsOi4oKs4oSidCByZW1vdmUgdGhlIFRoZW1lV2Fnb24gY3JlZGl0IGxpbmsgZnJvbSB0aGlzIGZyZWUgSFRNTDUgdGVtcGxhdGUgdW50aWwgeW91IGRvbmF0ZS4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvODgyIjthOjE2OntzOjI6ImlkIjtzOjM6Ijg4MiI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxNDoiQlMgQnVzaW5lc3MgMDEiO3M6ODoiY2F0ZWdvcnkiO3M6OToiY29ycG9yYXRlIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6Njg6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODgyX3ByZXZpZXcuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDE3LTA0LTI2IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czo5MjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4ODJfcHJldmlldy5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD04ODImYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjQ6ImZpemkiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjIiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjQ4OiJBIGJ1c2luZXNzIGZsYXQgYm9vdHN0cmFwIDMgcmVzcG9uc2l2ZSB0ZW1wbGF0ZS4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvODgwIjthOjE2OntzOjI6ImlkIjtzOjM6Ijg4MCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxNDoiQlMgTWFnYXppbmUgMDEiO3M6ODoiY2F0ZWdvcnkiO3M6NDoibmV3cyI7czo3OiJwcmV2aWV3IjthOjI6e2k6MDtzOjY4OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDg4MF9wcmV2aWV3LmpwZyI7aToxO3M6NzM6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODgwX3ByZXZpZXdfZnVsbC5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTctMDQtMjYiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjkyOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDg4MF9wcmV2aWV3LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTg4MCZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NDoiZml6aSI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMiI7czoxMToiZGVzY3JpcHRpb24iO3M6NDM6IkEgbWFnYXppbmUgYm9vdHN0cmFwIDMgcmVzcG9uc2l2ZSB0ZW1wbGF0ZS4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvODc5IjthOjE2OntzOjI6ImlkIjtzOjM6Ijg3OSI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxMjoiQlMgR2FtaW5nIDAyIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImdhbWluZyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjY4OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDg3OV9wcmV2aWV3LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxNy0wNC0yNiI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMCI7czo5OiJ0aHVtYm5haWwiO3M6OTI6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODc5X3ByZXZpZXcuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9ODc5JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo0OiJmaXppIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czozMDoiQlMgR2FtaW5nIDAyIGJvb3RzdHJhcCAzIHRoZW1lIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzg3OCI7YToxNjp7czoyOiJpZCI7czozOiI4NzgiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTI6IkJTIEdhbWluZyAwMSI7czo4OiJjYXRlZ29yeSI7czo2OiJnYW1pbmciO3M6NzoicHJldmlldyI7YToxOntpOjA7czo2ODoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4NzhfcHJldmlldy5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTctMDQtMjYiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjkyOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDg3OF9wcmV2aWV3LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTg3OCZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NDoiZml6aSI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMiI7czoxMToiZGVzY3JpcHRpb24iO3M6MzA6IkJTIEdhbWluZyAwMSBib290c3RyYXAgMyB0aGVtZSI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS84NjMiO2E6MTY6e3M6MjoiaWQiO3M6MzoiODYzIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjU6IkJhc2ljIjtzOjg6ImNhdGVnb3J5IjtzOjc6ImdlbmVyaWMiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo3NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4NjNfcHJldmlld19mcm9udGVuZC5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTctMDEtMjkiO3M6NzoidmVyc2lvbiI7czozOiIxLjIiO3M6OToidGh1bWJuYWlsIjtzOjEwMToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4NjNfcHJldmlld19mcm9udGVuZC5wbmciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD04NjMmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjc6Im1jcGVhY2UiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjIiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjM2OiJCYXNpYyBCb290c3RyYXAgMyB0aGVtZSBmb3IgZTEwNyB2LjIiO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvODU5IjthOjE2OntzOjI6ImlkIjtzOjM6Ijg1OSI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo0OiJDb3JlIjtzOjg6ImNhdGVnb3J5IjtzOjc6ImdlbmVyaWMiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo2ODoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4NTlfcHJldmlldy5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTctMDEtMTciO3M6NzoidmVyc2lvbiI7czo1OiIyLjEuMCI7czo5OiJ0aHVtYm5haWwiO3M6OTI6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODU5X3ByZXZpZXcucG5nIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9ODU5JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo0OiJlMTA3IjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxNzI6IlRoaXMgaXMgdGhlICYjMDM5O2NvcmUmIzAzOTsgdGhlbWUgZnJvbSBlMTA3IHYxLnggcG9ydGVkIGZvciB1c2Ugd2l0aCBlMTA3IHYyLjEuNCBvciBoaWdoZXIuIEl0IG5vdyBhbHNvIHVzZXMgdHdpdHRlciBib290c3RyYXAgZm9yIGEgcmVzcG9uc2l2ZSBsYXlvdXQgb24gbXVsdGlwbGUgZGV2aWNlcy4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvODE1IjthOjE2OntzOjI6ImlkIjtzOjM6IjgxNSI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo1OiJGaXR0eSI7czo4OiJjYXRlZ29yeSI7czo2OiJnYW1pbmciO3M6NzoicHJldmlldyI7YToxOntpOjA7czo3NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4MTVfcHJldmlld19mcm9udGVuZC5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTUtMTEtMDgiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEwMToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4MTVfcHJldmlld19mcm9udGVuZC5wbmciO3M6MzoidXJsIjtzOjQyOiJodHRwOi8vd3d3Lm1hbmF0d29yay5pbmZvL25ld3MucGhwP2l0ZW0uNTAiO3M6NjoiYXV0aG9yIjtzOjc6Im1jcGVhY2UiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjIiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjUyOiJQcmVtaXVtIEJvb3RzdHJhcCAzIG1pbGl0YXJ5L2dhbWUgdGhlbWUgZm9yIGUxMDcgdi4yIjtzOjU6InByaWNlIjtzOjExOiImZXVybzs0NS4wMCI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzgxMSI7YToxNjp7czoyOiJpZCI7czozOiI4MTEiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MzoiVGVuIjtzOjg6ImNhdGVnb3J5IjtzOjc6ImdlbmVyaWMiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo3NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4MTFfcHJldmlld19mcm9udGVuZC5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTUtMDctMTgiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEwMToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4MTFfcHJldmlld19mcm9udGVuZC5wbmciO3M6MzoidXJsIjtzOjQyOiJodHRwOi8vd3d3Lm1hbmF0d29yay5pbmZvL25ld3MucGhwP2l0ZW0uNDgiO3M6NjoiYXV0aG9yIjtzOjc6Im1jcGVhY2UiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjIiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjU4OiJQcmVtaXVtIE1vZGVybiBEZXNpZ24gU3R5bGUgQm9vdHN0cmFwIDMgdGhlbWUgZm9yIGUxMDcgdi4yIjtzOjU6InByaWNlIjtzOjExOiImZXVybzs0MC4wMCI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzgxMCI7YToxNjp7czoyOiJpZCI7czozOiI4MTAiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NToiU3B1bmsiO3M6ODoiY2F0ZWdvcnkiO3M6NjoiZ2FtaW5nIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6Nzc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODEwX3ByZXZpZXdfZnJvbnRlbmQucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDE1LTA3LTE4IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMDE6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODEwX3ByZXZpZXdfZnJvbnRlbmQucG5nIjtzOjM6InVybCI7czo0MjoiaHR0cDovL3d3dy5tYW5hdHdvcmsuaW5mby9uZXdzLnBocD9pdGVtLjQ5IjtzOjY6ImF1dGhvciI7czo3OiJtY3BlYWNlIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czo0MzoiUHJlbWl1bSBCb290c3RyYXAgMyBnYW1lIHRoZW1lIGZvciBlMTA3IHYuMiI7czo1OiJwcmljZSI7czoxMToiJmV1cm87NDUuMDAiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS84MDkiO2E6MTY6e3M6MjoiaWQiO3M6MzoiODA5IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjQ6IlJ1c2giO3M6ODoiY2F0ZWdvcnkiO3M6NjoiZ2FtaW5nIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6Nzc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODA5X3ByZXZpZXdfZnJvbnRlbmQucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDE1LTA3LTE4IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMDE6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODA5X3ByZXZpZXdfZnJvbnRlbmQucG5nIjtzOjM6InVybCI7czo0MjoiaHR0cDovL3d3dy5tYW5hdHdvcmsuaW5mby9uZXdzLnBocD9pdGVtLjQ1IjtzOjY6ImF1dGhvciI7czo3OiJtY3BlYWNlIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czozODoiUHJlbWl1bSBCb290c3RyYXAgMyB0aGVtZSBmb3IgZTEwNyB2LjIiO3M6NToicHJpY2UiO3M6MTE6IiZldXJvOzQ1LjAwIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvODA4IjthOjE2OntzOjI6ImlkIjtzOjM6IjgwOCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo1OiJQYXBlciI7czo4OiJjYXRlZ29yeSI7czo3OiJnZW5lcmljIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6Nzc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODA4X3ByZXZpZXdfZnJvbnRlbmQucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDE1LTA3LTE4IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMDE6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODA4X3ByZXZpZXdfZnJvbnRlbmQucG5nIjtzOjM6InVybCI7czo0MjoiaHR0cDovL3d3dy5tYW5hdHdvcmsuaW5mby9uZXdzLnBocD9pdGVtLjQ2IjtzOjY6ImF1dGhvciI7czo3OiJtY3BlYWNlIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czo2MDoiUHJlbWl1bSBNYXRlcmlhbCBEZXNpZ24gU3R5bGUgQm9vdHN0cmFwIDMgdGhlbWUgZm9yIGUxMDcgdi4yIjtzOjU6InByaWNlIjtzOjExOiImZXVybzs0MC4wMCI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzgwNyI7YToxNjp7czoyOiJpZCI7czozOiI4MDciO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NDoiTW9ieSI7czo4OiJjYXRlZ29yeSI7czo3OiJnZW5lcmljIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6Nzc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODA3X3ByZXZpZXdfZnJvbnRlbmQucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDE1LTA3LTE4IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMDE6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODA3X3ByZXZpZXdfZnJvbnRlbmQucG5nIjtzOjM6InVybCI7czo0MjoiaHR0cDovL3d3dy5tYW5hdHdvcmsuaW5mby9uZXdzLnBocD9pdGVtLjQ3IjtzOjY6ImF1dGhvciI7czo3OiJtY3BlYWNlIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czo2MDoiUHJlbWl1bSBNYXRlcmlhbCBEZXNpZ24gU3R5bGUgQm9vdHN0cmFwIDMgdGhlbWUgZm9yIGUxMDcgdi4yIjtzOjU6InByaWNlIjtzOjExOiImZXVybzs0MC4wMCI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzgwNiI7YToxNjp7czoyOiJpZCI7czozOiI4MDYiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTI6Ik1vYmlsZSBGaXJzdCI7czo4OiJjYXRlZ29yeSI7czo3OiJnZW5lcmljIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6Nzc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODA2X3ByZXZpZXdfZnJvbnRlbmQucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDE1LTA3LTE4IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMDE6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMDAwODA2X3ByZXZpZXdfZnJvbnRlbmQucG5nIjtzOjM6InVybCI7czo0MjoiaHR0cDovL3d3dy5tYW5hdHdvcmsuaW5mby9uZXdzLnBocD9pdGVtLjQ0IjtzOjY6ImF1dGhvciI7czo3OiJtY3BlYWNlIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIyIjtzOjExOiJkZXNjcmlwdGlvbiI7czozODoiUHJlbWl1bSBCb290c3RyYXAgMyB0aGVtZSBmb3IgZTEwNyB2LjIiO3M6NToicHJpY2UiO3M6MTE6IiZldXJvOzQwLjAwIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvODA1IjthOjE2OntzOjI6ImlkIjtzOjM6IjgwNSI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxMDoiR2FtZXMgUGx1cyI7czo4OiJjYXRlZ29yeSI7czo2OiJnYW1pbmciO3M6NzoicHJldmlldyI7YToxOntpOjA7czo3NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4MDVfcHJldmlld19mcm9udGVuZC5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTUtMDctMTgiO3M6NzoidmVyc2lvbiI7czozOiIxLjEiO3M6OToidGh1bWJuYWlsIjtzOjEwMToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA4MDVfcHJldmlld19mcm9udGVuZC5wbmciO3M6MzoidXJsIjtzOjQyOiJodHRwOi8vd3d3Lm1hbmF0d29yay5pbmZvL25ld3MucGhwP2l0ZW0uNDEiO3M6NjoiYXV0aG9yIjtzOjc6Im1jcGVhY2UiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjIiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjM4OiJQcmVtaXVtIEJvb3RzdHJhcCAzIHRoZW1lIGZvciBlMTA3IHYuMiI7czo1OiJwcmljZSI7czoxMToiJmV1cm87NDUuMDAiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS83OTgiO2E6MTY6e3M6MjoiaWQiO3M6MzoiNzk4IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjE0OiJEZWZpYW50ekdhbWluZyI7czo4OiJjYXRlZ29yeSI7czo2OiJnYW1pbmciO3M6NzoicHJldmlldyI7YToxOntpOjA7czo2ODoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy8wMDA3OThfcHJldmlldy5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTUtMDItMTAiO3M6NzoidmVyc2lvbiI7czozOiIyLjAiO3M6OToidGh1bWJuYWlsIjtzOjkyOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzAwMDc5OF9wcmV2aWV3LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTc5OCZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6ODoiTGFvY2hlWGUiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjIiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjk2OiJUaGlzIHdhcyBjcmVhdGVkIGJhY2sgaW4gMjAxMCBmb3IgRGVmaWFudHogR2FtaW5nIGFuZCBjb252ZXJ0ZWQgb3ZlciB0byB0aGUgbmV3IHZlcnNpb24gb2YgZTEwNy4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTY0IjthOjE2OntzOjI6ImlkIjtzOjM6IjE2NCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo2OiJEaWVzZWwiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6MTAzOiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzI5ODEzLS0tZGllc2VsX3YxLjAtLS1zczEzNjU3Njk3NDYuMTEucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEzLTA0LTEyIjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMjc6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMjk4MTMtLS1kaWVzZWxfdjEuMC0tLXNzMTM2NTc2OTc0Ni4xMS5wbmciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xNjQmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjc6InJvb2Zkb2ciO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjM1MDoiw6LigqzLnERpZXNlbMOi4oKs4oSiIGhhcyBiZWVuIGNyZWF0ZWQgdG8gcHJvdmlkZSBhIGdyaXR0eSwgdXJiYW4gbG9vayB0byB5b3VyIHdlYnNpdGUuIElkZWFsIGZvciBtdXNpYy1iYXNlZCBuZXdzIHNpdGVzLCB0aGlzIHRoZW1lIGJsZW5kcyBncmVhdCBkZXNpZ24gd2l0aCBlYXN5IGZ1bmN0aW9uYWxpdHkgYW5kIGFuZCB3aWxsIHN0aWxsIGxvb2sgZ3JlYXQgbG9uZyBpbiB0byB0aGUgZnV0dXJlLgoKCkZpeGVkIFdpZHRoICg5NjBweCkxMiBNZW51IEFyZWFzMyBQYWdlIExheW91dHMyIFNpdGVsaW5rIEFyZWFzMyBzdHlsZXNoZWV0c090aGVyIE5ld3MgdGVtcGxhdGVzQ3VzdG9tIGxvZ2luIGFuZCBzZWFyY2giO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTYzIjthOjE2OntzOjI6ImlkIjtzOjM6IjE2MyI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo0OiJiYWJhIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImxlZ2FjeSI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjk1OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzQ4Mzk5LS0tYmFiYS0tLXNzMTM1MDU1MzU0Ni43LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMi0xMC0xOCI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMCI7czo5OiJ0aHVtYm5haWwiO3M6MTE5OiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzQ4Mzk5LS0tYmFiYS0tLXNzMTM1MDU1MzU0Ni43LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTE2MyZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MzoiQWxmIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czo4MTE6ImJhYmEgaXMgYSB0aGVtZSB3aXRoIGZsdWlkIGxheW91dCBhbmQgb2ZmZXJzLCBhcyByYXJlbHkgSSBkbywgYSBzY2hlbWUgd2l0aCB0d28gYXJlYXMgc2lkZSBtZW51LgpUaGUgZGVzaWduIGlzIHNpbXBsZSBhbmQgY2xlYW4gYW5kIGluY29ycG9yYXRlcyBzb21lIGNzczMgZmVhdHVyZXMgZm9yIHRoZSAmIzA5Mjsicm91bmQgY29ybmVyJiMwOTI7Ii4gTmV2ZXJ0aGVsZXNzLCB0aGUgdXNlIG9mIGphdmFzY3JpcHQgcGFzc2VzIFczQyB2YWxpZGF0aW9uIGRlc3BpdGUgdGhlIHVzZSBvZiBzcGVjaWZpYyB5ZXQgZGVwcmVjYXRlZC4KClRoZXJlIGFyZSB0aHJlZSBkaWZmZXJlbnQgbGF5b3V0cywgb25lIHdpdGggYm90aCBibG9ja3MgbWVudSwgYSBtZW51IHdpdGggYSBzaW5nbGUgYmxvY2sgYW5kIG9uZSBmdWxsIHBhZ2UsIGFuZCBzaXggYXJlYXMgbWVudS4KVGhlIHBhbmVsIHByb3ZpZGVzIGEgc2ltcGxpZmllZCBsb2dpbiB1dGlsaXR5IGNvbnRyb2wgb2YgdGhlIGxhdGVzdCBuZXdzIG9mIHRoZSBzaXRlIChyZXF1aXJlcyBwbHVnaW4gaW5zdGFsbGVkIGxhdGVzdCBpbmZvKSwgYW5kIHRoZSBzZWFyY2ggYmFyIGlzIGRlY29yYXRlZCB3aXRoIHNvbWUgZWZmZWN0cy4KClRoZSBuYXZpZ2F0aW9uIG1lbnUgc3VwcG9ydCBzdWJtZW51cyBhbmQgaXMgbWFuYWdlYWJsZSBmcm9tIHRoZSBhZG1pbiBwYW5lbCwgc2l0ZSBsaW5rcy4KCkl0ICYjMDkyOydjb21wYXRpYmxlIHdpdGggYW55IGJyb3dzZXIsIGJ1dCBpbiB0aG9zZSBvbGRlciBlZmZlY3QgJiMwOTI7InJvdW5kZWQgY29ybmVycyYjMDkyOyIgaXMgbm90IGF2YWlsYWJsZS4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTYyIjthOjE2OntzOjI6ImlkIjtzOjM6IjE2MiI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo3OiJPdmVyYWxsIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImxlZ2FjeSI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjExMDoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8zNDE1NS0tLXRoZW1lX292ZXJhbGxfdjEuMy0tLXNzMTM0ODgxNTAwMC44OC5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTItMDktMjUiO3M6NzoidmVyc2lvbiI7czozOiIxLjMiO3M6OToidGh1bWJuYWlsIjtzOjEzNDoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8zNDE1NS0tLXRoZW1lX292ZXJhbGxfdjEuMy0tLXNzMTM0ODgxNTAwMC44OC5wbmciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xNjImYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjc6InZlc2tvdG8iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjU0MzoiMTAwMHB4IGZpeGVkIHdpZHRoCkRyb3AgZG93biBsaW5rcwoxMDAlIFhIVE1MCldlYiAyLjAgb3JpZW50ZWQKQ3VzdG9tIGZvcnVtIHRlbXBsYXRlcwpDdXN0b20gTGlzdCBuZXcgdGVtcGxhdGUKQ3VzdG9tIENhbGVuZGFyIHRlbXBsYXRlCkN1c3RvbSBMb2dpbgpDdXN0b20gU2VhcmNoCkN1c3RvbSBMb2dpbgpGYWNlYm9vayBOZXdzIGxpa2UKRlMgJiMwOTI7JiMwOTI7JiMwOTI7JmFtcDthbXA7cXVvdDtGb2xsb3cgVXMmIzA5MjsmIzA5MjsmIzA5MjsmYW1wO2FtcDtxdW90OyBzaG9ydGNvZGUKTGF5b3V0cwpZb3UgY2FuIHNldHVwIDMgY3VzdG9tIGxheW91dHMKMSBDb2x1bW4gLSBDZW50ZXIgY29sdW1uIChIaWRlIGFsbCBtZW51cykKMSBDb2x1bW4gb24gSG9tZSBwYWdlIChpbmRleC5waHApIHdpdGggNyBtZW51IGFyZWFzCjIgQ29sdW1ucyAtIFJpZ2h0IGFuZCBDZW50ZXIgY29sdW1uIChzaXRlIGNvbnRlbnQpIHdpdGggMTEgbWVudSBhcmVhcwoxIENvbHVtbiAtIENlbnRlciBjb2x1bW4gKGZvcnVtLCBnYWxsZXJ5IGV0Yy4pCk9ubGluZSBkZW1vIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzE2MSI7YToxNjp7czoyOiJpZCI7czozOiIxNjEiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NToic3F1aWQiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6OTc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvNDgzOTktLS1zcXVpZC0tLXNzMTM0NzYwNDc1My45Ni5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTItMDktMTMiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyMToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS80ODM5OS0tLXNxdWlkLS0tc3MxMzQ3NjA0NzUzLjk2LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTE2MSZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MzoiQWxmIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czo1ODc6IktBUk1BIGlzIGEgdmVyeSBlYXN5IHRvIHVzZSBUaGVtZSwgdmlydHVhbGx5ICJwbHVnIGFuZCBwbGF5Iiwgd2hpY2ggcmVxdWlyZXMgdmVyeSBmZXcgc3RlcHMgZm9yIGl0cyBjdXN0b21pemF0aW9uIGFuZCBhZGFwdGF0aW9uIHRvIHRoZWlyIHNpdGUuCkl0IHdpbGwgYmUgc3VmZmljaWVudCB0byByZXBsYWNlIHRoZSBpbWFnZSBvZiB0aGUgbG9nbyBpbiB0aGUgaGVhZGVyICh3aGlsZSByZXNwZWN0aW5nIHRoZWlyIHNoYXBlIGFuZCBzaXplKSBhbmQgY29uZmlndXJlIHRoZSBtZW51IGZyb20gdGhlIGUxMDcgYWRtaW4gcGFuZWwsIGFzIHdlbGwgYXMgdG8gYXNzaWduIHRoZSBibG9ja3MgdG8gdGhlIGZpdmUgYXJlYXMgbWVudXMgYXZhaWxhYmxlLgoKVGhlIG1lbnUgbmF2aWdhdGlvbiBpcyBoYW5kbGVkIGJ5IHRoZSB0aGVtZSBvZiB0aGUgc2l0ZSBhbmQgcmVhZCB0aGUgbGlua3MgZnJvbSB0aGUgZGF0YWJhc2UsIHNob3dpbmcgc3VibWVudXMgYWxzby4KVGhlICJzb2NpYWwgYnV0dG9ucyIgYXJlIGNvbmZpZ3VyYWJsZSBieSB0aGUgdXNlci4KCkl0IG9mZmVycyAyIGRpZmZlcmVudCBsYXlvdXRzIGFuZCA1IG1lbnUgYXJlYXMuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzE2MCI7YToxNjp7czoyOiJpZCI7czozOiIxNjAiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NToia2FybWEiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6OTc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvNDgzOTktLS1rYXJtYS0tLXNzMTM0NzYwNDY5MC45NC5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTItMDktMTMiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyMToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS80ODM5OS0tLWthcm1hLS0tc3MxMzQ3NjA0NjkwLjk0LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTE2MCZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MzoiQWxmIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czo1ODc6IktBUk1BIGlzIGEgdmVyeSBlYXN5IHRvIHVzZSBUaGVtZSwgdmlydHVhbGx5ICJwbHVnIGFuZCBwbGF5Iiwgd2hpY2ggcmVxdWlyZXMgdmVyeSBmZXcgc3RlcHMgZm9yIGl0cyBjdXN0b21pemF0aW9uIGFuZCBhZGFwdGF0aW9uIHRvIHRoZWlyIHNpdGUuCkl0IHdpbGwgYmUgc3VmZmljaWVudCB0byByZXBsYWNlIHRoZSBpbWFnZSBvZiB0aGUgbG9nbyBpbiB0aGUgaGVhZGVyICh3aGlsZSByZXNwZWN0aW5nIHRoZWlyIHNoYXBlIGFuZCBzaXplKSBhbmQgY29uZmlndXJlIHRoZSBtZW51IGZyb20gdGhlIGUxMDcgYWRtaW4gcGFuZWwsIGFzIHdlbGwgYXMgdG8gYXNzaWduIHRoZSBibG9ja3MgdG8gdGhlIGZpdmUgYXJlYXMgbWVudXMgYXZhaWxhYmxlLgoKVGhlIG1lbnUgbmF2aWdhdGlvbiBpcyBoYW5kbGVkIGJ5IHRoZSB0aGVtZSBvZiB0aGUgc2l0ZSBhbmQgcmVhZCB0aGUgbGlua3MgZnJvbSB0aGUgZGF0YWJhc2UsIHNob3dpbmcgc3VibWVudXMgYWxzby4KVGhlICJzb2NpYWwgYnV0dG9ucyIgYXJlIGNvbmZpZ3VyYWJsZSBieSB0aGUgdXNlci4KCkl0IG9mZmVycyAyIGRpZmZlcmVudCBsYXlvdXRzIGFuZCA1IG1lbnUgYXJlYXMuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzE1OSI7YToxNjp7czoyOiJpZCI7czozOiIxNTkiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTM6ImJyZWFkIG9mIGxpZmUiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6MTA1OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzQ4Mzk5LS0tYnJlYWRfb2ZfbGlmZS0tLXNzMTM0NzYwNDYwNC4zNy5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTItMDktMTMiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyOToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS80ODM5OS0tLWJyZWFkX29mX2xpZmUtLS1zczEzNDc2MDQ2MDQuMzcuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTU5JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czozOiJBbGYiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjU3ODoiYnJlYWRfb2ZfbGlmZSBpcyBhICJwbHVnIGFuZCBwbGF5IiB0aGVtZSwgd2hpY2ggcmVxdWlyZXMgdmVyeSBmZXcgc3RlcHMgZm9yIGl0cyBjdXN0b21pemF0aW9uIGFuZCBhZGFwdGF0aW9uIHRvIHlvdXIgc2l0ZS4KSXQgd291bGQgaW5kZWVkIGJlIHN1ZmZpY2llbnQgdG8gcmVwbGFjZSB0aGUgYmFja2dyb3VuZCBpbWFnZSBpbiB0aGUgaGVhZGVyIGFuZCBjb25maWd1cmUgdGhlIG1lbnUgZnJvbSB0aGUgYWRtaW4gcGFuZWwgb2YgZTEwNywgYXMgd2VsbCBhcyB0byBhbGxvY2F0ZSB0aGUgYmxvY2tzIG1lbnUgdG8gdGhlIGZvdXIgYXZhaWxhYmxlIGFyZWFzLgoKV2l0aCB0d28gYmxvY2sgc2lkZSBtZW51LCBpdCdzIHBsYW5uZWQgYSBjZW50cmFsIGFyZWEgYmFubmVyIGF0IHRoZSB0b3AgYW5kIGF0IHRoZSBib3R0b20sIGluIHRoZSBjb250ZW50IGFyZWEuCgpOYXZpZ2F0aW9uIGlzIGhhbmRsZWQgYnkgdGhlIHRoZW1lIGFuZCByZWFkIHRoZSBsaW5rcyBvZiB0aGUgc2l0ZSAgZnJvbSB0aGUgZGF0YWJhc2UsIHNob3dpbmcgYSBtYXhpbXVtIG9mIDcsIGJvdGggaW4gdGhlIGhlYWRlciBhbmQgdGhlIGZvb3Rlci4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTU4IjthOjE2OntzOjI6ImlkIjtzOjM6IjE1OCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo0OiJiYWx1IjtzOjg6ImNhdGVnb3J5IjtzOjY6ImxlZ2FjeSI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjk2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzQ4Mzk5LS0tYmFsdS0tLXNzMTM0NzYwNDQ3NS42OC5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTItMDktMTMiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyMDoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS80ODM5OS0tLWJhbHUtLS1zczEzNDc2MDQ0NzUuNjguanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTU4JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czozOiJBbGYiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjU3NjoiYmFsdSBpcyBhIHZlcnkgZWFzeSB0byB1c2UgVGhlbWUsIHZpcnR1YWxseSAicGx1ZyBhbmQgcGxheSIsIHdoaWNoIHJlcXVpcmVzIHZlcnkgZmV3IHN0ZXBzIGZvciBpdHMgY3VzdG9taXphdGlvbiBhbmQgYWRhcHRhdGlvbiB0byB0aGVpciBzaXRlLgpJdCB3aWxsIGJlIHN1ZmZpY2llbnQgdG8gcmVwbGFjZSB0aGUgaW1hZ2Ugb2YgdGhlIGxvZ28gaW4gdGhlIGhlYWRlciAod2hpbGUgcmVzcGVjdGluZyB0aGVpciBzaGFwZSBhbmQgc2l6ZSkgYW5kIGNvbmZpZ3VyZSB0aGUgbWVudSBmcm9tIHRoZSBlMTA3IGFkbWluIHBhbmVsLCBhcyB3ZWxsIGFzIHRvIGFzc2lnbiB0aGUgYmxvY2tzIHRvIHRoZSBmaXZlIGFyZWFzIG1lbnVzIGF2YWlsYWJsZS4KClRoZSBtZW51IG5hdmlnYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgdGhlbWUgb2YgdGhlIHNpdGUgYW5kIHJlYWQgdGhlIGxpbmtzIGZyb20gdGhlIGRhdGFiYXNlLCBzaG93aW5nIGEgbWF4aW11bSBvZiA1IGluIHRoZSB0b3AgbWVudSBhbmQgMjAgaW4gdGhlIHNpZGUgbWVudS4KCkl0IG9mZmVycyAzIGRpZmZlcmVudCBsYXlvdXRzIGFuZCA2IG1lbnUgYXJlYXMuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzE1NyI7YToxNjp7czoyOiJpZCI7czozOiIxNTciO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTA6IkJvb2sgU3RvcmUiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6Mzp7aTowO3M6MTA2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzMzNDc5LS0tYm9va19zdG9yZV92MS4xLS0tc3MxMzQ2MzQzMTkxLjQuanBnIjtpOjE7czoxMDY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMzM0NzktLS1ib29rX3N0b3JlX3YxLjEtLS1zczEzNDYzNDMwOTEuMy5qcGciO2k6MjtzOjEwNjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8zMzQ3OS0tLWJvb2tfc3RvcmVfdjEuMS0tLXNzMTM0NjM0MzA5MS4zLmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMi0wOC0zMCI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTMwOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzMzNDc5LS0tYm9va19zdG9yZV92MS4xLS0tc3MxMzQ2MzQzMTkxLjQuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTU3JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czoxMDoiaW5lYnJpYXRlZCI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6NjY0OiJCb29rIFN0b3JlIHRoZW1lIHBvcnRlZCBieSBQSFBub29iaWUsIG9yaWdpbmFsIGRlc2lnbmVkIGNyZWF0ZWQgYnkgQ1NTY3JlbWUuY29tCgotLS0tLS0tLS0tCgo5MDBweCBmaXhlZCB3aWR0aCwgY29udGVtcG9yYXJ5IHRoZW1lIGlkZWFsIGZvciBmb3IgbmV1dHJhbCBzaXRlcy4KCkluY2x1ZGVzIDMgY3VzdG9tIG1lbnUgYXJlYXMgYW5kIGN1c3RvbSBsb2dpbiBhcmVhLgoKRnVsbCBwYWdlIGZvcnVtIGFuZCBzb21lIGNvcmUgcGFnZXMuCgpUaGUgaXMgdjEuMSBvZiB0aGlzIHRoZW1lLCBtaW5vciBjb2RlIGNvcnJlY3Rpb25zIHNpbmNlIHYxLjAgKHRoYW5rcyB0byB2ZXNrb3RvIGZvciByZXBvcnRpbmcpCkkgaGF2ZSB0ZXN0ZWQgaXQgYW5kIGl0IGRvZXMgdGhlIGpvYiwgdGhlcmUgaXMgcm9vbSBmb3IgaW1wcm92ZW1lbnQgYnV0IGFzIHRoaXMgaXMgYSBmcmVlIHRoZW1lIEkgYW0gcmVsZWFzaW5nIGl0ICZhbXA7YW1wO2FtcDthbXA7YW1wO2FtcDthbXA7YW1wO2FtcDthbXA7YW1wO3F1b3Q7YXMgaXMmYW1wO2FtcDthbXA7YW1wO2FtcDthbXA7YW1wO2FtcDthbXA7YW1wO2FtcDtxdW90Oy4KCkZvciBhbGwgc3VwcG9ydCBhbmQgbW9kaWZpY2F0aW9uIGFzc2lzdGFuY2UgcGxlYXNlIHVzZSB0aGUgZTEwNy5vcmcgZm9ydW1zLgoKUmVnYXJkcwoKUEhQbm9vYmllIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzE1NiI7YToxNjp7czoyOiJpZCI7czozOiIxNTYiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTE6IlNpbHZlciBCbG9nIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImxlZ2FjeSI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjEwMjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8zMzQ3OS0tLXNpbHZlcmJsb2ctLS1zczEzNDU5MjY0NTAuMDIuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEyLTA4LTI1IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMjY6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMzM0NzktLS1zaWx2ZXJibG9nLS0tc3MxMzQ1OTI2NDUwLjAyLmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTE1NiZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MTA6ImluZWJyaWF0ZWQiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjU4MzoiU2lsdmVyQmxvZyB0aGVtZSBwb3J0ZWQgYnkgUEhQbm9vYmllLCBvcmlnaW5hbCBkZXNpZ25lZCBjcmVhdGVkIGJ5IENTU0hlYXZlbi5vcmcKCi0tLS0tLS0tLS0KCjEwMDBweCBmaXhlZCB3aWR0aCwgbGlnaHQgYW5kIGNsZWFuIHRoZW1lIGlkZWFsIGZvciBibG9nZ2luZy4KCkluY2x1ZGVzIDIgY3VzdG9tIG1lbnUgYXJlYXMgYW5kIGN1c3RvbSBsb2dpbiBhcmVhLgoKRnVsbCBwYWdlIGZvcnVtIGFuZCBjb250ZW50IHBhZ2VzLgoKVGhpcyBpcyBhIHNpbXBsZSBidXQgdmlzdWFsbHkgcGxlYXNpbmcgdGhlbWUgSSBwb3J0ZWQgb3ZlciB0byBlMTA3IGZvciB1c2Ugb24gYSBibG9nZ2luZyBzaXRlIGFuZCBzaW5jZSBkZWNpZGVkIHRvIHJlbGVhc2UgaXQgZm9yIHB1YmxpYyB1c2UuCgpUaGUgaXMgdjEuMCBvZiB0aGlzIHRoZW1lLCB0aGVyZSB3aWxsIGxpa2VseSBiZSB1cGRhdGVkIGFuZCBtb2RpZmllZCB2ZXJzaW9ucyBpbiB0aGUgbmVhciBmdXR1cmUuCgpGb3IgYWxsIHN1cHBvcnQgYW5kIG1vZGlmaWNhdGlvbiBhc3Npc3RhbmNlIHBsZWFzZSB1c2UgdGhlIGUxMDcub3JnIGZvcnVtcy4KClJlZ2FyZHMKClBIUG5vb2JpZSI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xNTUiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTU1IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjc6Iktpc3MtbWUiO3M6ODoiY2F0ZWdvcnkiO3M6NToiYWR1bHQiO3M6NzoicHJldmlldyI7YTo0OntpOjA7czo5MjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy81NjM3OS0tLWtpc3NlLW1lX3YuMS0tLXNzMTMzMjE0NTY5MS4zMy5wbmciO2k6MTtzOjkyOiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzU2Mzc5LS0ta2lzc2UtbWVfdi4xLS0tc3MxMzMyMTQ1NzA1LjAyLnBuZyI7aToyO3M6OTI6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvNTYzNzktLS1raXNzZS1tZV92LjEtLS1zczEzMzIxNDU3MTQuMTIucG5nIjtpOjM7czo5MjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy81NjM3OS0tLWtpc3NlLW1lX3YuMS0tLXNzMTMzMjE0NTcyMi4zMS5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTItMDEtMjkiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjExNjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy81NjM3OS0tLWtpc3NlLW1lX3YuMS0tLXNzMTMzMjE0NTY5MS4zMy5wbmciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xNTUmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjk6Ik1hcnTDg8KtbiI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6NDA3OiJUaGUgdGhlbWUgS2lzcyBtZSwgd2FzIGNyZWF0ZWQgYW5kIGRlc2lnbmVkIHdpdGggdGhlIGZvbGxvd2luZyBhcHBsaWNhdGlvbnMgYW5kIHBsdWdpbnM6CgpGaXhlZCB3aWR0aCA5OTZweDsKMTAgQXJlYXMgbWVudTsKMiBsYXlvdXRzICgxIGFuZCAyIGNvbHVtbnMpOwoxIE5hdmlnYXRpb24gaG9yaXpvbnRhbCBtYWluIHdpdGggc3VibGlua3M7CjQgU3R5bGVzIG1lbnVzOwoxIEFyZWEgYmFubmVyOwpTb2NpYWwgaWNvbnM7CkFyZWEgbWFpbnRlbmFuY2UgKDkgbGFuZ3VhZ2VzKTsKQXJlYSBsb2dpbjsKSlF1ZXJ5IGltcGxlbWVudHMgKGJveCBOb3RpZmljYXRpb25zIC0gQmFjayB0byBUb3ApCgpQbHVnaW5zOgoKQ29udGVudCBSb3RhdG9yCmUxMDdCb29rbWFya2luZwpFYXN5U2hvcApUZXN0aW1vbmlhbAoKREVNTyI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6NDU6Ind3dy5rYW5vbmltcHJlc29yLmNvbS9kZW1vcy9raXNzZW1lL2luZGV4LnBocCI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTU0IjthOjE2OntzOjI6ImlkIjtzOjM6IjE1NCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxMzoiQWlvbiBBc21vZGllciI7czo4OiJjYXRlZ29yeSI7czo2OiJnYW1pbmciO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMDM6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvNTExNDgtLS11dGY4X2Fpb25fYXNtb2RpYW5fdjEuMS0tLXNzMTMyNjk3NjkxNi42Mi5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTItMDEtMTkiO3M6NzoidmVyc2lvbiI7czozOiIxLjEiO3M6OToidGh1bWJuYWlsIjtzOjEyNzoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy81MTE0OC0tLXV0ZjhfYWlvbl9hc21vZGlhbl92MS4xLS0tc3MxMzI2OTc2OTE2LjYyLnBuZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTE1NCZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MTI6IkzDg8KzbmEgTG9yZSI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6MjA5OiJBaW9uIEFzbW9kaWFuIGUxMDcgdGhlbWU6Cgo0IG1lbnUgYXJlYXMKRXh0cmFzIC0gUFNEIHByb2plY3QgZmlsZSBmb3IgZWRpdGluZyBoZWFkZXIKT24tbW91c2Ugb3ZlciBkcm9wLWRvd24gbWVudQoKVGhpcyB0aGVtZSB3YXMgcG9ydGVkIGZyb20gYSBmcmVlIEpvb21sYSB0ZW1wbGF0ZSEKCkRlc2lnbiBieTogTGVyblZpZC5jb20gZmVhdC4gZ2FtZS10ZW1wbGF0ZSI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xNTMiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTUzIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjEzOiJXb1cgQ2F0YWNseXNtIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImdhbWluZyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjEwMzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy81MTE0OC0tLXV0Zjhfd293X2NhdGFjbHlzbV92MS4xLS0tc3MxMzI2OTc2NDI3LjI2LnBuZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMi0wMS0xOSI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTI3OiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzLzUxMTQ4LS0tdXRmOF93b3dfY2F0YWNseXNtX3YxLjEtLS1zczEzMjY5NzY0MjcuMjYucG5nIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTUzJmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czoxMjoiTMODwrNuYSBMb3JlIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoyNzM6IldvcmxkIG9mIFdhcmNyYWZ0OiBDYXRhY2x5c20gZTEwNyB0aGVtZToKCkZsYXNoIGhlYWRlcgpGbGFzaCBmb290ZXIKNCBtZW51IGFyZWFzCkV4dHJhcyAtIFBTRCBwcm9qZWN0IGZpbGUgZm9yIGVkaXRpbmcgaGVhZGVyCk9uLW1vdXNlIG92ZXIgZHJvcC1kb3duIG1lbnUKClRoaXMgdGhlbWUgd2FzIHBvcnRlZCBmcm9tIGEgZnJlZSBKb29tbGEgdGVtcGxhdGUhCgpEZXNpZ24gYnk6IExlcm5WaWQuY29tIGZlYXQuIGdhbWUtdGVtcGxhdGUgc3BvbnNvcmVkIGJ5IFdvVyBHdWlkZSI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xNTIiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTUyIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjc6IkZlbnN0ZXIiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6OTk6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMzQxNTUtLS1mZW5zdGVyLS0tc3MxMzI1NjkzNjYyLjg4LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMi0wMS0wNCI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMCI7czo5OiJ0aHVtYm5haWwiO3M6MTIzOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzM0MTU1LS0tZmVuc3Rlci0tLXNzMTMyNTY5MzY2Mi44OC5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xNTImYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjc6InZlc2tvdG8iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjc1OiIxMDAwcHggZml4ZWQgd2lkdGgKRHJvcCBkb3duIGxpbmtzCjEwMCUgWEhUTUwKV2ViIDIuMCBvcmllbnRlZAoKT25saW5lIGRlbW8iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTUxIjthOjE2OntzOjI6ImlkIjtzOjM6IjE1MSI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxMDoiU3RhckNyYWZ0MiI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMDA6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMzQxNTUtLS1zYzJfdjEuMS0tLXNzMTMyNTY5MzcxNC4zNy5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTItMDEtMDQiO3M6NzoidmVyc2lvbiI7czozOiIxLjEiO3M6OToidGh1bWJuYWlsIjtzOjEyNDoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8zNDE1NS0tLXNjMl92MS4xLS0tc3MxMzI1NjkzNzE0LjM3LnBuZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTE1MSZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NzoidmVza290byI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6MTE6Ik9ubGluZSBkZW1vIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzE1MCI7YToxNjp7czoyOiJpZCI7czozOiIxNTAiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NDoiU29sbyI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMTA6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMzQxNTUtLS1zb2xvX2luc3RhbGxfX3YxLjEtLS1zczEzMjU2OTM3NDUuOTIuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEyLTAxLTA0IjtzOjc6InZlcnNpb24iO3M6MzoiMS4xIjtzOjk6InRodW1ibmFpbCI7czoxMzQ6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMzQxNTUtLS1zb2xvX2luc3RhbGxfX3YxLjEtLS1zczEzMjU2OTM3NDUuOTIuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTUwJmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo3OiJ2ZXNrb3RvIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxODk6IjEwMDBweCBmaXhlZCB3aWR0aCAoYnkgZGVmYXVsdCkKTmV3cyBJbWFnZSBUaHVtYm5haWxzIChidWlsdCBpbiBlMTA3IGZ1bmN0aW9uYWxpdHkpCldlYiAyLjAgb3JpZW50ZWQKRlMgU3VibGlua3MKNiBNZW51IGFyZWFzClRocmVlIGNvbHVtbnMKQ3VzdG9tIHRoZW1lIGxheW91dCB3aXRoIHR3byBjb2x1bW5zCgpPbmxpbmUgZGVtbyI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xNDkiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTQ5IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjY6IlN0cmVhbSI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMTU6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMzQxNTUtLS1zdHJlYW1fdjEuMV90aGVtZV9maWxlcy0tLXNzMTMyNTY5Mzc3NS42Ni5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTItMDEtMDQiO3M6NzoidmVyc2lvbiI7czozOiIxLjEiO3M6OToidGh1bWJuYWlsIjtzOjEzOToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8zNDE1NS0tLXN0cmVhbV92MS4xX3RoZW1lX2ZpbGVzLS0tc3MxMzI1NjkzNzc1LjY2LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTE0OSZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NzoidmVza290byI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6NDE3OiJUaGlzIHRoZW1lIGRlbW9uc3RyYXRlcyB0aGUgbmV3IHRlY2hub2xvZ2llcyB0aGF0IHdlIGFyZSBkZXZlbG9waW5nIGZvciBvdXIgcHJlbWl1bSBzZXJ2aWNlczogQ29udHJvbGxpbmcgdGhlIHRoZW1lIGxheW91dCBhbmQgYmVoYXZpb3IgZnJvbSB0aGUgYWRtaW5pc3RyYXRpb24gYXJlYSBHVUkgdmlhIGN1c3RvbSB3aWRnZXQgKENMIFdpZGdldHMgcGx1Z2luKSAtIGZvciBtb3JlIGluZm9ybWF0aW9uIHdhdGNoIHRoZSB2aWRlbyB0dXRvcmlhbC4KCjEwMDBweCBmaXhlZCB3aWR0aCBvciAxMDAlIGJyb3dzZXIgd2lkZSAoY29uZmlndXJhYmxlIGluIHRoZW1lLnBocCkKRHJvcCBkb3duIGxpbmtzIHdpZHRoIDQgc3ViIGxldmVscwpUYWJsZWxlcyBsYXlvdXQKMTAwJSBYSFRNTApXZWIgMi4wIG9yaWVudGVkIAoKT25saW5lIERlbW8iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTQ4IjthOjE2OntzOjI6ImlkIjtzOjM6IjE0OCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo1OiJGUyAxNiI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMTQ6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMzQxNTUtLS1mc18xNl92MS4yX3RoZW1lX2ZpbGVzLS0tc3MxMzI1NjkzNzkwLjg0LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMi0wMS0wNCI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMiI7czo5OiJ0aHVtYm5haWwiO3M6MTM4OiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzM0MTU1LS0tZnNfMTZfdjEuMl90aGVtZV9maWxlcy0tLXNzMTMyNTY5Mzc5MC44NC5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xNDgmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjc6InZlc2tvdG8iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjQ2NzoiMTAwMHB4IGZpeGVkIHdpZHRoIG9yIDEwMCUgYnJvd3NlciB3aWRlIChjb25maWd1cmFibGUgaW4gdGhlbWUucGhwKQpEcm9wIGRvd24gbGlua3Mgd2lkdGggNCBzdWIgbGV2ZWxzCjEwMCUgWEhUTUwKV2ViIDIuMCBvcmllbnRlZApIb3dfdG8uUERGIGluY2x1ZGVkCgpZb3UgY2FuIHNldHVwIDQgbGF5b3V0cyAtIGp1c3QgdXNlIHRoZSB2aXNpYmlsaXR5IG9wdGlvbiBvZiBlYWNoIG1lbnUgYW5kIHRoZSB0aGVtZSB3aWxsIGZpdCBhdXRvbWF0aWNhbGx5OgoKMSBDb2x1bW4gLSBDZW50ZXIgY29sdW1uIChIaWRlIGFsbCBtZW51cykKMiBDb2x1bW5zIC0gTGVmdCBhbmQgQ2VudGVyIGNvbHVtbiAoSGlkZSByaWdodCBjb2x1bW4pCjIgQ29sdW1ucyAtIFJpZ2h0IGFuZCBDZW50ZXIgY29sdW1uIChIaWRlIGxlZnQgY29sdW1uKQozIENvbHVtbnMgLSBMZWZ0LCBSaWdodCBhbmQgQ2VudGVyIGNvbHVtbgoKT25saW5lIGRlbW8iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTQ3IjthOjE2OntzOjI6ImlkIjtzOjM6IjE0NyI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo2OiJMYXR2aWEiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6OTk6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTIwOS0tLWxhdHZpYS0tLXNzMTMxMDY3NzUyMi40MzM0LnBuZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMS0wNy0xNCI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTIzOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzEyMDktLS1sYXR2aWEtLS1zczEzMTA2Nzc1MjIuNDMzNC5wbmciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xNDcmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjEyOiJkYXJranVzdGR6aW4iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjMzMDoiSSdtIHZlcnkgZ2xhZCB0byBpbnRyb2R1Y2UgbXkgbmV3IHRlbXBsYXRlLiBNeSBuZXcgdGVtcGxhdGUgaXMgY2FsbGVkIExhdHZpYSwgYmVjYXVzZSBJIGFtIExhdHZpYW4gYW5kIEkganVzdCB3YW50ZWQgdG8gbWFrZSB0ZW1wbGF0ZSBhYm91dCBteSBjb3VudHJ5LiBTbyBJIG1hZGUgdGVtcGxhdGUgZnJvbSBteSBjb3VudHkgZmxhZyBjb2xvcnMgYW5kIG1haW4gY2l0eSBzaGFkb3dzLgpUaGlzIHRoZW1lIGhhdmUgbGltaXRhdGlvbiwgb25lIGJhbm5lciB3aGF0IGNhbid0IGJlIHJlbW92ZWQhCgpXaGlsZSBub3QgdmVyaWZpZWQgeW91IGNhbiBkb3dub2xvYWQgZnJvbSBoZXJlIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzE0NiI7YToxNjp7czoyOiJpZCI7czozOiIxNDYiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTI6Ik15c3RpYyBOaWdodCI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMDQ6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTIwOS0tLW15c3RpY25pZ2h0LS0tc3MxMzA5OTU5Njk5Ljc5OTYucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDExLTA3LTA2IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMjg6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTIwOS0tLW15c3RpY25pZ2h0LS0tc3MxMzA5OTU5Njk5Ljc5OTYucG5nIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTQ2JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czoxMjoiZGFya2p1c3RkemluIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxNjE6IkFic3RyYWN0LCBiZWF1dGlmdWwgYW5kIHVuaXF1ZSBkZXNpZ24gLSBjcmVhdGVkIGZvciBkcmVhbWVycy4gCgooOTAwcHggZml4ZWQgd2lkdGgsIDk5JSBYSFRNTCwgY3VzdG9tIGxvZ2luIG1lbnUpCgpXaGlsZSBub3QgdmVyaWZpZWQgeW91IGNhbiBkb3dub2xvYWQgZnJvbSBoZXJlIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzE0NSI7YToxNjp7czoyOiJpZCI7czozOiIxNDUiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTY6IldpbmRvd3MgY29sb3JmdWwiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6MTA2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzEyMDktLS13aW5kb3dzY29sb3JmdWwtLS1zczEzMDg3NjMyMzEuNzQucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDExLTA2LTIyIjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMzA6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTIwOS0tLXdpbmRvd3Njb2xvcmZ1bC0tLXNzMTMwODc2MzIzMS43NC5wbmciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xNDUmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjEyOiJkYXJranVzdGR6aW4iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjI0MjoiQWZ0ZXIgbG9uZyB0aW1lIG15IGZpcnN0IGZyZWUgdGhlbWUgaXMgcmVsZWFzZWQhIChiZWZvcmUgSSBjcmVhdGUgdGhlbWVzIGZyb20gQW5nZWx1cyBEZXNpZ24pCkNvbG9yZnVsIHRoZW1lIGZvciBldmVyeW9uZSB3aG8gd2FudHMgaXQuLgooOTg4cHggZml4ZWQgd2lkdGgsIGNsZWFuIGRlc2lnbiwgNiBtZW51IGFyZWFzKQoKT3RoZXIgZ29vZCB0aGVtZXMgeW91IGNhbiBnZXQgaW4gaHR0cDovL2RyZWFtZm9yaWEuY28uY2MiO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTQ0IjthOjE2OntzOjI6ImlkIjtzOjM6IjE0NCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo5OiJDaHJpc3RtYXMiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6OTk6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvODYtLS1jaHJpc3RtYXMzLS0tc3MxMjkyODgwNzU0LjkxLmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMC0xMi0yMCI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTIzOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzg2LS0tY2hyaXN0bWFzMy0tLXNzMTI5Mjg4MDc1NC45MS5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xNDQmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjM6IldlYiI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6OToiQ2hyaXN0bWFzIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzE0MyI7YToxNjp7czoyOiJpZCI7czozOiIxNDMiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTA6Inplb3NfcGFyXzIiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6MTAxOiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzE3OTUtLS16ZW9zX3Bhcl8yLS0tc3MxMjkwMDk5MTYzLjkxLmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMC0xMS0xOCI7czo3OiJ2ZXJzaW9uIjtzOjM6IjIuMCI7czo5OiJ0aHVtYm5haWwiO3M6MTI1OiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzE3OTUtLS16ZW9zX3Bhcl8yLS0tc3MxMjkwMDk5MTYzLjkxLmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTE0MyZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NjoicGFycGFyIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czo0MDoiaHR0cDovL3d3dy5wYXJwYXIuaXIvbmV3cy5waHA/ZXh0ZW5kLjQwNSI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6NDA6Imh0dHA6Ly93d3cucGFycGFyLmlyL25ld3MucGhwP2V4dGVuZC40MDUiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzE0MiI7YToxNjp7czoyOiJpZCI7czozOiIxNDIiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NzoiNHhBXzA0NyI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo5ODoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yNTA3LS0tNHhhXzA0Ny0tLXNzMTMyNjc0NjAwNC4xOC5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTAtMTEtMTIiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyMjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yNTA3LS0tNHhhXzA0Ny0tLXNzMTMyNjc0NjAwNC4xOC5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xNDImYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjEwOiJPcGVyYXRvcjk5IjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoyNDoiQSBCYXR0bGVmaWVsZDItIFRoZW1lLi4uIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czoxNToid3d3LmUxMDcuNHhhLmRlIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xNDEiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTQxIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjc6IjR4YV8wNDgiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6OTg6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMjUwNy0tLTR4YV8wNDgtLS1zczEyODk1NTgwODUuODEuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTExLTEyIjtzOjc6InZlcnNpb24iO3M6MzoiMS4zIjtzOjk6InRodW1ibmFpbCI7czoxMjI6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMjUwNy0tLTR4YV8wNDgtLS1zczEyODk1NTgwODUuODEuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTQxJmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czoxMDoiT3BlcmF0b3I5OSI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6MTg6IkEgcmVkLVdoaXRlIFRoZW1lLiI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MTU6Ind3dy5lMTA3LjR4YS5kZSI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTQwIjthOjE2OntzOjI6ImlkIjtzOjM6IjE0MCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxNzoiV29ybGQgb2YgV2FyY3JhZnQiO3M6ODoiY2F0ZWdvcnkiO3M6NjoiZ2FtaW5nIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6OTc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvNTc0LS0td29ybGRvZndhcmNyYWZ0XzEuMS0tLXNzMTI4NzkwNjA4NC42MS5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTAtMTAtMjQiO3M6NzoidmVyc2lvbiI7czozOiIxLjEiO3M6OToidGh1bWJuYWlsIjtzOjEyMToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy81NzQtLS13b3JsZG9md2FyY3JhZnRfMS4xLS0tc3MxMjg3OTA2MDg0LjYxLnBuZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTE0MCZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6OToiU3Bhcmt5OTExIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoyOTQ6IkEgMyBjb2x1bW4gV29ybGQgb2YgV2FyY3JhZnQgdGhlbWUgYmFzZWQgb2ZmIG9mIGluZ2FtZSBjb250ZW50IGFuZCB0aGUgV29XIGZhbnNpdGUga2l0LgoKU29tZSBvZiB0aGUgZmVhdHVyZXMgaW5jbHVkZToKKiBKYXZhc2NyaXB0IGNsb2NrCiogV29XIGZhdmljb24KKiBXb1cgZm9ydW0gaWNvbnMKKiBVc2VyL01lbWJlciBsaXN0IHNob3dzIGEgY2FtZXJhIGlmIHRoZSB1c2VyIGhhcyBhIHBob3RvIHVwbG9hZGVkCipDb2xsYXBzaWJsZSBtZW51cyAoZG9lcyBub3QgcmVtZW1iZXIgY29sbGFwc2Ugc3RhdGUgeWV0KSI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xMzkiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTM5IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjY6IkxsYW1hcyI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YTo0OntpOjA7czo5NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yNTAxLS0tbGxhbWFzLS0tc3MxMzI2NDk1NTY0LjQucG5nIjtpOjE7czo5NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yNTAxLS0tbGxhbWFzLS0tc3MxMzI2NDk1NTczLjI3LnBuZyI7aToyO3M6OTY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMjUwMS0tLWxsYW1hcy0tLXNzMTMyNjQ5NTU4NC4xLnBuZyI7aTozO3M6OTc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMjUwMS0tLWxsYW1hcy0tLXNzMTMyNjQ5NTU5Ny4wNi5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTAtMTAtMjIiO3M6NzoidmVyc2lvbiI7czozOiIyLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyMDoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yNTAxLS0tbGxhbWFzLS0tc3MxMzI2NDk1NTY0LjQucG5nIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTM5JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo5OiJNYXJ0w4PCrW4iO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjI2MzoiQ2FyYWN0ZXJpc3RpY2FzIEdlbmVyYWxlczoKCkFuY2hvIGRlIDEwMjBweApTZWxlY2Npb25hZG9yIGRlIDYgQ29sb3Jlcwo2IMODwqFyZWFzIGRlIG1lbsODwrpzCjIgZGlzZcODwrFvcyBkZSBww4PCoWdpbmEgKDMgeSAyIGNvbHVtbmFzKQpNZW7Dg8K6IGRlIG5hdmVnYWNpw4PCs24gY29uIHN1YiBtZW7Dg8K6cwrDg8KBcmVhIGRlIEluaWNpbyBkZSBTZXNpw4PCs24gcGVyc29uYWxpemFkYQpJY29ub3MgZGUgcmVkIHNvY2lhbAouLi55IG11Y2hvIG3Dg8KhcyEiO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjM2OiJ3d3cuZTEwN3B0LmNvbS9kZW1vcy9sbGFtYXMvbmV3cy5waHAiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEzOCI7YToxNjp7czoyOiJpZCI7czozOiIxMzgiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NzoiNHhBXzAxOSI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMDM6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMjUwNy0tLTR4YV8wMTlfdjEuMi0tLXNzMTMyNjc0NjA2Mi4wMy5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTAtMDktMjgiO3M6NzoidmVyc2lvbiI7czozOiIxLjIiO3M6OToidGh1bWJuYWlsIjtzOjEyNzoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yNTA3LS0tNHhhXzAxOV92MS4yLS0tc3MxMzI2NzQ2MDYyLjAzLmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTEzOCZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MTA6Ik9wZXJhdG9yOTkiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjIxMzoiQSB0d28tY29sdW1uLCBtdWx0aS1jb2xvciB0aGVtZSB3aXRoIHRoZSBtZW51IG9uIHRoZSByaWdodCBzaWRlLiAKRm91ciBjb2xvcnMgYXZhaWxhYmxlOiBvcmFuZ2UsIGxpZ2h0IGJsdWUsIGdyZWVuIGFuZCByZWQuClRvIGFzc2lnbiB0aGUgY29sb3IsIHNlbGVjdCB0aGUgYWRtaW4gYXJlYSwgdGhlbWUgbWFuYWdlciB0aGF0IHRoZSBhcHByb3ByaWF0ZSBzdHlsZS5jc3MuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czo0NzoiaHR0cDovL3d3dy5lMTA3LjR4YS5kZS9uZXdzLnBocD90aGVtZXByZXZpZXcuMjAiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEzNyI7YToxNjp7czoyOiJpZCI7czozOiIxMzciO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NzoiNHhBXzAyNyI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo5ODoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yNTA3LS0tNHhhXzAyNy0tLXNzMTI4NTY2NzA4NS44Ni5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTAtMDktMjgiO3M6NzoidmVyc2lvbiI7czozOiIyLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyMjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yNTA3LS0tNHhhXzAyNy0tLXNzMTI4NTY2NzA4NS44Ni5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xMzcmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjEwOiJPcGVyYXRvcjk5IjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxNjoiaXMgYSBkYXJrIHRoZW1lLiI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6Mjc6Imh0dHA6Ly93d3cubmV1c3NlcmV2LTFiLm9yZyI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTM2IjthOjE2OntzOjI6ImlkIjtzOjM6IjEzNiI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo3OiI0eEFfMDQzIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImxlZ2FjeSI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjk4OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzI1MDctLS00eGFfMDQzLS0tc3MxMjg1NjY2NDg3LjE2LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMC0wOS0yOCI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMCI7czo5OiJ0aHVtYm5haWwiO3M6MTIyOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzI1MDctLS00eGFfMDQzLS0tc3MxMjg1NjY2NDg3LjE2LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTEzNiZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MTA6Ik9wZXJhdG9yOTkiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjE2OiJpcyBhIGRhcmsgdGhlbWUuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czo0NzoiaHR0cDovL3d3dy5lMTA3LjR4YS5kZS9uZXdzLnBocD90aGVtZXByZXZpZXcuMTQiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEzNSI7YToxNjp7czoyOiJpZCI7czozOiIxMzUiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NzoiNHhBXzA0MiI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo5ODoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yNTA3LS0tNHhhXzA0Mi0tLXNzMTI4NTY2NjAzOS4xNy5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTAtMDktMjgiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyMjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yNTA3LS0tNHhhXzA0Mi0tLXNzMTI4NTY2NjAzOS4xNy5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xMzUmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjEwOiJPcGVyYXRvcjk5IjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxNjoiaXMgYSBkYXJrIHRoZW1lLiI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6NDY6Imh0dHA6Ly93d3cuZTEwNy40eGEuZGUvbmV3cy5waHA/dGhlbWVwcmV2aWV3LjMiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEzNCI7YToxNjp7czoyOiJpZCI7czozOiIxMzQiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NToiYzNfdjEiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6OTY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvODYtLS1jMy12MS4xLS0tc3MxMjg0MzQ4OTEzLjE1LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMC0wOS0xMiI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTIwOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzg2LS0tYzMtdjEuMS0tLXNzMTI4NDM0ODkxMy4xNS5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xMzQmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjM6IldlYiI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6MTE4OiJNYWdpY2FsIEZhbnRhc3kgU2l0ZS4KCllvdSBzaG91bGQgYWxzbyBpbnN0YWxsIHRoZSBUYXJvdCBHYW1lIHdpdGggdGhpcyB0aGVtZSB0byBtYWtlIGl0IGNvbXBsZXRlIHdvcmtpbmcuCgpUYXJvdCBHYW1lIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEzMyI7YToxNjp7czoyOiJpZCI7czozOiIxMzMiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NToiTG9yZHMiO3M6ODoiY2F0ZWdvcnkiO3M6NjoiZ2FtaW5nIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6ODI6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvODYtLS1sb3Jkcy0tLXNzMTI4NDEzMTkwOC4zOS5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTAtMDktMTAiO3M6NzoidmVyc2lvbiI7czozOiIzLjAiO3M6OToidGh1bWJuYWlsIjtzOjEwNjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy84Ni0tLWxvcmRzLS0tc3MxMjg0MTMxOTA4LjM5LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTEzMyZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MzoiV2ViIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czozNjoiTG9yZHMuCgpGcm9tIHRoZSBHYW1lIER1bmdlb24tbG9yZHMuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEzMiI7YToxNjp7czoyOiJpZCI7czozOiIxMzIiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTM6IkR1bmdlb24tTG9yZHMiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6MTAzOiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzg2LS0tZHVuZ2Vvbi1sb3JkczItLS1zczEyODQwOTQyNjQuODUuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTA5LTA5IjtzOjc6InZlcnNpb24iO3M6MzoiMi4wIjtzOjk6InRodW1ibmFpbCI7czoxMjc6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvODYtLS1kdW5nZW9uLWxvcmRzMi0tLXNzMTI4NDA5NDI2NC44NS5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xMzImYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjM6IldlYiI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6MTM6IkR1bmdlb24gTG9yZHMiO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTMxIjthOjE2OntzOjI6ImlkIjtzOjM6IjEzMSI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxMDoiUGVya2FtZW50YSI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo5OToiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS84Ni0tLXBlcmthbWVudGEtLS1zczEyODQwOTMxNDMuODUuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTA5LTA5IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMjM6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvODYtLS1wZXJrYW1lbnRhLS0tc3MxMjg0MDkzMTQzLjg1LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTEzMSZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MzoiV2ViIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoyMToiU29tZXRoaW5nIFBlcmthbWVudGEuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEzMCI7YToxNjp7czoyOiJpZCI7czozOiIxMzAiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NzoiTXlUaGVtZSI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo5NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS84Ni0tLW15dGhlbWUtLS1zczEyODQwOTAzMjYuMzIuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTA5LTA5IjtzOjc6InZlcnNpb24iO3M6MzoiMy4wIjtzOjk6InRodW1ibmFpbCI7czoxMjA6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvODYtLS1teXRoZW1lLS0tc3MxMjg0MDkwMzI2LjMyLmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTEzMCZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MzoiV2ViIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxMjoiQ3VzdG9tIFRoZW1lIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEyOSI7YToxNjp7czoyOiJpZCI7czozOiIxMjkiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTI6IlN0YXIgQ3JhZnQgMiI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo5NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS84Ni0tLXNjMl92My4xLS0tc3MxMjg0MDc4ODMzLjg3LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMC0wOS0wOSI7czo3OiJ2ZXJzaW9uIjtzOjM6IjMuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTIxOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzg2LS0tc2MyX3YzLjEtLS1zczEyODQwNzg4MzMuODcuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTI5JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czozOiJXZWIiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjQ2OiJTdGFyIENyYWZ0IDIgVGhlbWUsIGRvbmUgYSBsb25nIHRpbWUgYWdvLgoKMy4xIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEyNSI7YToxNjp7czoyOiJpZCI7czozOiIxMjUiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTY6ImxpZ2h0Z3JlZW5fcGFyXzEiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6MTA3OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzE3OTUtLS1saWdodGdyZWVuX3Bhcl8xLS0tc3MxMjc4OTM4MjAwLjk5LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMC0wNy0xMiI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMCI7czo5OiJ0aHVtYm5haWwiO3M6MTMxOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzE3OTUtLS1saWdodGdyZWVuX3Bhcl8xLS0tc3MxMjc4OTM4MjAwLjk5LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTEyNSZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NjoicGFycGFyIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxMDg6Ind3dy5wYXJwYXIuaXIKVGVzdGVkIG9uIHRoZSBicm93c2VycyBJbnRlcm5ldCBFeHBsb3JlciA2LjcuOCBhbmQgTW96aWxsYSBGaXJlZm94IGFuZCBHb29nbGUgQ2hyb21lIGFuZCBPcGVyYSI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6NDA6Imh0dHA6Ly93d3cucGFycGFyLmlyL25ld3MucGhwP2V4dGVuZC4zMTQiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEyNCI7YToxNjp7czoyOiJpZCI7czozOiIxMjQiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTY6InNwZWNpYWxpc3RfcGFyXzEiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6MTA2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzE3OTUtLS1zcGVjaWFsaXN0X3Bhcl8xLS0tc3MxMjc4ODM0MTMyLjYuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTA3LTExIjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMzA6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTc5NS0tLXNwZWNpYWxpc3RfcGFyXzEtLS1zczEyNzg4MzQxMzIuNi5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xMjQmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjY6InBhcnBhciI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6MTM5OiJ3d3cucGFycGFyLmlyClRlc3RlZCBvbiB0aGUgYnJvd3NlcnMgSW50ZXJuZXQgRXhwbG9yZXIgNS42LjcuOCBhbmQgTW96aWxsYSBGaXJlZm94IGFuZCBHb29nbGUgQ2hyb21lIGFuZCBPcGVyYQotLS0tLS0tLS0tCkNvZGUgaXMgcXVpdGUgZGl2IjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czozMzoid3d3LnBhcnBhci5pci9uZXdzLnBocD9leHRlbmQuMzExIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xMjMiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTIzIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjEwOiJnb2xkX3Bhcl8xIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImxlZ2FjeSI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjEwMToiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8xNzk1LS0tZ29sZF9wYXJfMS0tLXNzMTI3ODY2ODQ4NC4zMi5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTAtMDctMDkiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyNToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8xNzk1LS0tZ29sZF9wYXJfMS0tLXNzMTI3ODY2ODQ4NC4zMi5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xMjMmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjY6InBhcnBhciI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6MTMyOiJ3d3cucGFycGFyLmlyClRlc3RlZCBvbiB0aGUgYnJvd3NlcnMgSW50ZXJuZXQgRXhwbG9yZXIgNS42LjcuOCBhbmQgTW96aWxsYSBGaXJlZm94IGFuZCBHb29nbGUgQ2hyb21lIGFuZCBPcGVyYQotLS0KQ29kZSBpcyBxdWl0ZSBkaXYiO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjQwOiJodHRwOi8vd3d3LnBhcnBhci5pci9uZXdzLnBocD9leHRlbmQuMzEwIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xMjIiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTIyIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjE0OiJuZXR3b3JraW5nX3BhciI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMDc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTc5NS0tLW5ldHdvcmtpbmdfcGFyXzEtLS1zczEyNzgyNjg5MzEuMDEuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTA3LTA0IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMzE6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTc5NS0tLW5ldHdvcmtpbmdfcGFyXzEtLS1zczEyNzgyNjg5MzEuMDEuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTIyJmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo2OiJwYXJwYXIiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjE3ODoid3d3LnBhcnBhci5pcgpUZXN0ZWQgb24gdGhlIGJyb3dzZXJzIEludGVybmV0IEV4cGxvcmVyIDUuNi43LjggYW5kIE1vemlsbGEgRmlyZWZveCBhbmQgR29vZ2xlIENocm9tZSBhbmQgT3BlcmEKLS0tLS0tLS0tLQpDb2RlIGlzIHF1aXRlIGRpdgotLS0tLS0tLS0tClNpemUgNjQgS0IgaW1hZ2VzIHZlcnkgZmFzdCI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6NDA6Imh0dHA6Ly93d3cucGFycGFyLmlyL25ld3MucGhwP2V4dGVuZC4zMDMiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEyMSI7YToxNjp7czoyOiJpZCI7czozOiIxMjEiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTY6IkZlYXIgVmF1bHQgQ2xlYW4iO3M6ODoiY2F0ZWdvcnkiO3M6NjoiZ2FtaW5nIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6OTg6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMjI3MS0tLWZlYXJfdmF1bHRfY2xlYW5fdjItLS1zczEyNzYzMzAxMTYuNzIucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTA2LTEyIjtzOjc6InZlcnNpb24iO3M6MzoiMi4wIjtzOjk6InRodW1ibmFpbCI7czoxMjI6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMjI3MS0tLWZlYXJfdmF1bHRfY2xlYW5fdjItLS1zczEyNzYzMzAxMTYuNzIucG5nIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTIxJmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo4OiJudWtsZXoxNiI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6ODc6IlRoaXMgdGhlbWUgaXMgYSA0IGNvbHVtIHdpdGggbmVhdCBsb29rIHRoaXMgdGhlbWUgd2FzIG1hZGUgZm9yIGEgQ2xhbiBjYWxsZWQgRmVhciBWYXVsdCI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MTc6Ind3dy5mZWFydmF1bHQubmV0Ijt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xMTkiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTE5IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjEyOiJHb2EmIzAzOTt1bGQiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6ODM6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvNDFfZ29hdWxkX3ByZXZpZXcucG5nIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTA0LTIxIjtzOjc6InZlcnNpb24iO3M6MzoiMi4wIjtzOjk6InRodW1ibmFpbCI7czoxMDc6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvNDFfZ29hdWxkX3ByZXZpZXcucG5nIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTE5JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czoxMToiU3RhciBBZHJhZWwiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjM2OiJVcGRhdGVkIHRvIHdvcmsgd2l0aCB0aGUgbGF0ZXN0IGUxMDciO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTE4IjthOjE2OntzOjI6ImlkIjtzOjM6IjExOCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo2OiJGbG9yYWwiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6MTAwOiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzk1My0tLWZsb3JhbF8xXzItLS1zczEyNzE4NDIzODcuMjguanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTA0LTE3IjtzOjc6InZlcnNpb24iO3M6MzoiMS4yIjtzOjk6InRodW1ibmFpbCI7czoxMjQ6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvOTUzLS0tZmxvcmFsXzFfMi0tLXNzMTI3MTg0MjM4Ny4yOC5qcGciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xMTgmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjc6IkRlc3NlZGsiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjgyOiJUaGVtZSBiYXNlZCBvbiBSZWxpbmUsIG1vZGlmaWVkIHdpdGggbmV3IGxvb2sgYW5kIGFuIGltYWdlLXJvdGF0b3IuIEluYy4gcHMtZmlsZXMuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzExNyI7YToxNjp7czoyOiJpZCI7czozOiIxMTciO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6NzoiSGVhbGluZyI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czo5NzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS85NTMtLS1oZWFsaW5nLS0tc3MxMjcxNTAwOTA5LjI3LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMC0wNC0xNyI7czo3OiJ2ZXJzaW9uIjtzOjM6IjEuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTIxOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzk1My0tLWhlYWxpbmctLS1zczEyNzE1MDA5MDkuMjcuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTE3JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo3OiJEZXNzZWRrIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxNjQ6IlRoZW1lIGZvciBIZWFsdGggYW5kIGhlYWxpbmcsIGluY2wuIFBzLi1maWxlIGZvciB0aGUgdG9wIGJhbm5lci4KV2lkdGggODAwcHguIE1lbnUgYXJlYSBpbiB0b3AsIHJpZ2h0IGFuZCBib3R0b20uCjggTWVudWVzLiAyIGluIHRoZSByaWdodCBhcmVhLiA2IGluIHRoZSBtYWluIGFyZWEuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzExNiI7YToxNjp7czoyOiJpZCI7czozOiIxMTYiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTI6ImZvb3RiYWxsX3BhciI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMDc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTc5NS0tLWZvb3RiYWxsX3Bhcl92ZXIxLS0tc3MxMjcwODkyNDQzLjEuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTA0LTEwIjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMzE6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTc5NS0tLWZvb3RiYWxsX3Bhcl92ZXIxLS0tc3MxMjcwODkyNDQzLjEuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTE2JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo2OiJwYXJwYXIiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjQwOiJodHRwOi8vd3d3LnBhcnBhci5pci9uZXdzLnBocD9leHRlbmQuMjUyIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzExNSI7YToxNjp7czoyOiJpZCI7czozOiIxMTUiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTI6IlRvdXJpc21fdmVyMiI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMDc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTc5NS0tLXRvdXJpc21fcGFyX3ZlcjItLS1zczEyNzA4OTIwNDcuMTQuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDEwLTA0LTEwIjtzOjc6InZlcnNpb24iO3M6MzoiMi4wIjtzOjk6InRodW1ibmFpbCI7czoxMzE6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTc5NS0tLXRvdXJpc21fcGFyX3ZlcjItLS1zczEyNzA4OTIwNDcuMTQuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTE1JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo2OiJwYXJwYXIiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjQwOiJodHRwOi8vd3d3LnBhcnBhci5pci9uZXdzLnBocD9leHRlbmQuMjUzIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czo0MDoiaHR0cDovL3d3dy5wYXJwYXIuaXIvbmV3cy5waHA/ZXh0ZW5kLjI1MyI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTE0IjthOjE2OntzOjI6ImlkIjtzOjM6IjExNCI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxNjoiTWl4ZWQgTWVkaWEgR3JheSI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToyOntpOjA7czoxMDI6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMzAtLS1taXhlZG1lZGlhZ3JheS0tLXNzMTI2OTE2NTA1Mi40LmpwZyI7aToxO3M6MTAyOiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzMwLS0tbWl4ZWRtZWRpYWdyYXktLS1zczEyNjkxNjU2OTguMy5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMTAtMDMtMjEiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyNjoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8zMC0tLW1peGVkbWVkaWFncmF5LS0tc3MxMjY5MTY1MDUyLjQuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTE0JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo3OiJ2ZXNrb3RvIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czo4MTI6Ik1peGVkIE1lZGlhIEdyYXkgdGhlbWUgaXMgYmFzZWQgb24gTWl4ZWQgTWVkaWEgR3JheSBXUCBUaGVtZSBmcm9tICZhbXA7YW1wO2FtcDthbXA7YW1wO2x0O2EgaHJlZj0mYW1wO2FtcDthbXA7YW1wO2FtcDtxdW90O2h0dHA6Ly93d3cuNXRoZW1lcy5jb20mYW1wO2FtcDthbXA7YW1wO2FtcDtxdW90OyB0aXRsZT0mYW1wO2FtcDthbXA7YW1wO2FtcDtxdW90OzV0aGVtZXMuY29tJmFtcDthbXA7YW1wO2FtcDthbXA7cXVvdDsgcmVsPSZhbXA7YW1wO2FtcDthbXA7YW1wO3F1b3Q7ZXh0ZXJuYWwmYW1wO2FtcDthbXA7YW1wO2FtcDtxdW90OyZhbXA7YW1wO2FtcDthbXA7YW1wO2d0OzV0aGVtZXMuY29tJmFtcDthbXA7YW1wO2FtcDthbXA7bHQ7L2EmYW1wO2FtcDthbXA7YW1wO2FtcDtndDsKVGhlbWUgaGF2ZSBmaXZlIG1lbnUgYXJlYXMsIHRocmVlIGNvbHVtbnMgbGF5b3V0IGFuZCBjdXN0b20gbGF5b3V0IHdpdGggb25lIGNvbHVtbi4KLSBGUyBTdWJsaW5rcyBzdXBwb3J0LgotIEN1c3RvbSAmYW1wO2FtcDthbXA7YW1wO2FtcDtxdW90O05ld3MgQXJjaGl2ZSZhbXA7YW1wO2FtcDthbXA7YW1wO3F1b3Q7IHN0eWxlCi0gQ3VzdG9tICZhbXA7YW1wO2FtcDthbXA7YW1wO3F1b3Q7TmV3cyBkYXRlJmFtcDthbXA7YW1wO2FtcDthbXA7cXVvdDsgc3R5bGUKLSBDdXN0b20gJmFtcDthbXA7YW1wO2FtcDthbXA7cXVvdDtHbyB0byBwYWdlJmFtcDthbXA7YW1wO2FtcDthbXA7cXVvdDsgc3R5bGUKLSBSU1MgcGx1Z2luIGlzIHJlcXVpcmVkCgpGaXJlZm94LCBJRSA3LzgsIEdvb2dsZSBDaHJvbWUsIE9wZXJhLCBTYWZhcmkgdGVzdGVkIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzExMyI7YToxNjp7czoyOiJpZCI7czozOiIxMTMiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6OToiY2hvY29sYXRlIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImxlZ2FjeSI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjEwNjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8xNzk1LS0tY2hvY29sYXRlX3Bhcl8xLS0tc3MxMjY5MDI3NzY0LjI0LmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMC0wMy0xOSI7czo3OiJ2ZXJzaW9uIjtzOjM6IjAuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTMwOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzE3OTUtLS1jaG9jb2xhdGVfcGFyXzEtLS1zczEyNjkwMjc3NjQuMjQuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTEzJmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo2OiJwYXJwYXIiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjE1MzoiM21lbnUgLgp0ZXN0IDogSW50ZXJuZXQgRXhwbG9yZXI1LjYuNy44IC4gIE1vemlsbGEgRmlyZWZveCAKY29kZTpkaXYKYWxsIHJlc29sdXRpb24gOiB5ZXMKaHR0cDovL3d3dy5wYXJwYXIuaXIvbmV3cy5waHA/Y2F0LjI5ClBFUlNJQU4gdGhlbWVzCmZvcnVtIDogeWVzIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czozNjoiaHR0cDovL3d3dy5wYXJwYXIuaXIvbmV3cy5waHA/Y2F0LjI5Ijt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xMTIiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTEyIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjc6IlRvdXJpc20iO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6MTA3OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzE3OTUtLS10b3VyaXNtX3Bhcl92ZXIxLS0tc3MxMjY5MDI3NTkyLjQzLmpwZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAxMC0wMy0xOSI7czo3OiJ2ZXJzaW9uIjtzOjM6IjAuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTMxOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzE3OTUtLS10b3VyaXNtX3Bhcl92ZXIxLS0tc3MxMjY5MDI3NTkyLjQzLmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTExMiZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NjoicGFycGFyIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxNTU6ImZsYXNoIGhlYWRlciAuIDJtZW51IC4KdGVzdCA6IEludGVybmV0IEV4cGxvcmVyNS42Ny44IC4gIE1vemlsbGEgRmlyZWZveCAKY29kZTpkaXYKYWxsIHJlc29sdXRpb24gOiB5ZXMKaHR0cDovL3d3dy5wYXJwYXIuaXIvbmV3cy5waHA/Y2F0LjI5ClBFUlNJQU4gdGhlbWVzIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czozNjoiaHR0cDovL3d3dy5wYXJwYXIuaXIvbmV3cy5waHA/Y2F0LjI5Ijt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xMTEiO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTExIjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjEyOiJJcnJlc2lzdGlibGUiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO3M6MDoiIjtzOjQ6ImRhdGUiO3M6MTA6IjIwMTAtMDEtMjQiO3M6NzoidmVyc2lvbiI7czozOiIyLjYiO3M6OToidGh1bWJuYWlsIjtiOjA7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTExMSZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NzoiYVNlcHRpayI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6MjAwOiJJcnJlc2lzdGlibGUgaXMgYSB0aGVtZSBmcm9tIHRoZSBndXlzIG9mIHdvb3RoZW1lcy5jb20gcG9ydGVkIGFuZCBpbXByb3ZlZCBvbmUgZm9yIGUxMDcgYnkgYVNlcHRpayBhc2suYWx0ZXJ2aXN0YS5vcmchCgpOQjogdGhpcyBpcyBqdXN0IGFuIG92ZXJ3cml0ZSBvZiB0aGUgMi41CgpVcGRhdGVkIGFuZCB0ZXN0ZWQgd2l0aCBlMTA3IHYwLjcuMTcgISI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6Mjg6ImlyY3NweXouYWx0ZXJ2aXN0YS5vcmcvZTEwNy8iO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEwOSI7YToxNjp7czoyOiJpZCI7czozOiIxMDkiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6ODoiTXJUZWNoaWUiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6ODc6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTY1MV9tcnRlY2hpZV9wcmV2aWV3LnBuZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAwOS0xMi0yNSI7czo3OiJ2ZXJzaW9uIjtzOjM6IjAuMSI7czo5OiJ0aHVtYm5haWwiO3M6MTExOiJodHRwczovL2UxMDcub3JnL3RodW1iLnBocD9hdz0yMDAmYWg9MTYwJnNyYz1lX1BMVUdJTi9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzE2NTFfbXJ0ZWNoaWVfcHJldmlldy5wbmciO3M6MzoidXJsIjtzOjY2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD0xMDkmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjEzOiJPR3JhbmRlRGlFbm5lIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czo0ODoiVGhpcyBpcyBhIHRoZW1lIHBvcnRlZCBmcm9tIEZyZWVDU1NUZW1wbGF0ZXMub3JnIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEwOCI7YToxNjp7czoyOiJpZCI7czozOiIxMDgiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTU6IkFsb3kgZTEwNyBUaGVtZSI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToyOntpOjA7czo5MzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8zMC0tLWFsb3ktLS1zczEyNjEwNTQ4OTIuMTUuanBnIjtpOjE7czo5MzoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8zMC0tLWFsb3ktLS1zczEyNjEwNTQ5MTYuMDEuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDA5LTEyLTE3IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMTc6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMzAtLS1hbG95LS0tc3MxMjYxMDU0ODkyLjE1LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTEwOCZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NzoidmVza290byI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6MTk0OiJBbG95IGUxMDcgVGhlbWUgaXMgYmFzZWQgb24gQWxveSBXUCB0aGVtZSBmcm9tIFdQSnVuY3Rpb24uY29tClRoZW1lIGhhdmUgdHdvIGNvbHVtbnMgYW5kIHRocmVlIG1lbnUgYXJlYXMgYW5kIGN1c3RvbSBsYXlvdXQgd2hpdCBvbmUgY29sdW1uLgoKRmlyZWZveCwgSUUgNy84LCBHb29nbGUgQ2hyb21lLCBPcGVyYSwgU2FmYXJpIHRlc3RlZCI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMzoidGhlbWVtYW5hZ2VyL29ubGluZS8xMDciO2E6MTY6e3M6MjoiaWQiO3M6MzoiMTA3IjtzOjQ6InR5cGUiO3M6NToidGhlbWUiO3M6NDoibW9kZSI7czo1OiJhZGRvbiI7czo0OiJuYW1lIjtzOjE3OiJDaHJpc3RtYXMgRGVsaWdodCI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMDY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTA5LS0tY2hyaXN0bWFzZGVsaWdodC0tLXNzMTI1OTg3OTUyOC45Mi5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMDktMTItMDMiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEzMDoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8xMDktLS1jaHJpc3RtYXNkZWxpZ2h0LS0tc3MxMjU5ODc5NTI4LjkyLnBuZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTEwNyZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6NToiMlRhbGwiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjM5MjoiQSBDaHJpc3RtYXMgdGhlbWUgZm9yIHRoZSBob2xpZGF5cyEKCkNocmlzdG1hcyBEZWxpZ2h0IHdhcyBtYWRlIGZvciBlMTA3IHYwLjcrLiBUaGUgdGhlbWUgaW5jbHVkZXMgYSBibGFuayBsb2dvIGltYWdlIGZvciBlYXN5IGN1c3RvbWl6YXRpb24gYXMgd2VsbCBhcyB0aGUgZGVmYXVsdCBmb250IHVzZWQgd2l0aCB0aGUgZGVmYXVsdCBsb2dvLgoKVGhlcmUgYXJlIHR3byBsYXlvdXRzOgoKQSB0d28tY29sdW1uIGxheW91dCB3aXRoIDQgbWVudSBhcmVhcyBhbmQgYSBzaW5nbGUgY29sdW1uIGxheW91dCB3aXRoIDIgbWVudSBhcmVhcy4KCkN1c3RvbSBsb2dpbiwgY29tbWVudCBhbmQgc2l0ZWRvd24gcGFnZXMgYXJlIGFsc28gaW5jbHVkZWQgYXMgYXJlIGN1c3RvbSBmb3J1bSBpY29ucy4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTA2IjthOjE2OntzOjI6ImlkIjtzOjM6IjEwNiI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoyMjoiQ291bnRlci1TdHJpa2UgVGhlbWUgNCI7czo4OiJjYXRlZ29yeSI7czo2OiJsZWdhY3kiO3M6NzoicHJldmlldyI7YToxOntpOjA7czoxMDk6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMjAzOC0tLWNzLW1hc3RlcnMuaW5mb192LjItLS1zczEyNTk1MzczMjMuNi5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMDktMTEtMjkiO3M6NzoidmVyc2lvbiI7czozOiIyLjAiO3M6OToidGh1bWJuYWlsIjtzOjEzMzoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy9wc2lsby90aGVtZS8yMDM4LS0tY3MtbWFzdGVycy5pbmZvX3YuMi0tLXNzMTI1OTUzNzMyMy42LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTEwNiZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MTQ6IiovTGFzdCBIdW1hbi8qIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czo5NDoiQ291bnRlci1TdHJpa2UgVGhlbWUgQnkgKi9MYXN0IEh1bWFuLyoKQXV0aG9yIFNpdGUKQWRkIG91ciBCYW5uZXIgb3IgTGluayBpbiBZb3VyIHNpdGUsIFBMRUFTRSI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MTU6ImNzLW1hc3RlcnMuaW5mbyI7fXM6MjM6InRoZW1lbWFuYWdlci9vbmxpbmUvMTA1IjthOjE2OntzOjI6ImlkIjtzOjM6IjEwNSI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo5OiJXYXJoYW1tZXIiO3M6ODoiY2F0ZWdvcnkiO3M6NjoiZ2FtaW5nIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6OTE6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvODYtLS13YXJoYW1tZXJfdjEuMS0tLXNzMTI1NzI5NjM1NC4yNi5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMDktMTEtMDMiO3M6NzoidmVyc2lvbiI7czozOiIxLjEiO3M6OToidGh1bWJuYWlsIjtzOjExNToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy84Ni0tLXdhcmhhbW1lcl92MS4xLS0tc3MxMjU3Mjk2MzU0LjI2LmpwZyI7czozOiJ1cmwiO3M6NjY6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTEwNSZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6MzoiV2ViIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czo2MzoiV2FyaGFtbWVyIG9ubGluZSBDbGFuIFRoZW1lLgoKVXBkYXRlISBTY3JlZW4gZ29lcyBmYXN0ZXIgaW4gSUUuIjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czowOiIiO31zOjIzOiJ0aGVtZW1hbmFnZXIvb25saW5lLzEwNCI7YToxNjp7czoyOiJpZCI7czozOiIxMDQiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6OToiTGluZUFnZSAyIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImdhbWluZyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjkwOiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzg2LS0tbGluZWFnZTJfdjEuMS0tLXNzMTI1NzI5NTM2OS44MS5qcGciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMDktMTEtMDMiO3M6NzoidmVyc2lvbiI7czozOiIxLjEiO3M6OToidGh1bWJuYWlsIjtzOjExNDoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy84Ni0tLWxpbmVhZ2UyX3YxLjEtLS1zczEyNTcyOTUzNjkuODEuanBnIjtzOjM6InVybCI7czo2NjoiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9MTA0JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czozOiJXZWIiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjc1OiJMaW5BZ2UgMiBnYW1lIHRoZW1lLgoKVXBkYXRlZCwgc2NyZWVuIGdvZXMgZmFzdGVyIGluIElFLgpTb21lIG1vdXNlcGlvbnRlci4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjI6InRoZW1lbWFuYWdlci9vbmxpbmUvOTQiO2E6MTY6e3M6MjoiaWQiO3M6MjoiOTQiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6ODoiR2FtZVpvbmUiO3M6ODoiY2F0ZWdvcnkiO3M6NjoiZ2FtaW5nIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6NzU6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvMTc3N19nYW1lem9uZV9wcmV2aWV3LnBuZyI7fXM6NDoiZGF0ZSI7czoxMDoiMjAwOS0wOC0wNCI7czo3OiJ2ZXJzaW9uIjtzOjM6IjAuMSI7czo5OiJ0aHVtYm5haWwiO3M6OTk6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvMTc3N19nYW1lem9uZV9wcmV2aWV3LnBuZyI7czozOiJ1cmwiO3M6NjU6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTk0JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo2OiJDcm9aZXIiO3M6Nzoid2Vic2l0ZSI7TjtzOjEzOiJjb21wYXRpYmlsaXR5IjtzOjE6IjEiO3M6MTE6ImRlc2NyaXB0aW9uIjtzOjUxOiJIZXJlIGlzIGRlbW8gb2YgdGhlIHRoZW1lIGh0dHA6Ly9nYW1lem9uZS1iZy5pbmZvIC4iO3M6NToicHJpY2UiO3M6MDoiIjtzOjg6ImxpdmVkZW1vIjtzOjA6IiI7fXM6MjI6InRoZW1lbWFuYWdlci9vbmxpbmUvNjIiO2E6MTY6e3M6MjoiaWQiO3M6MjoiNjIiO3M6NDoidHlwZSI7czo1OiJ0aGVtZSI7czo0OiJtb2RlIjtzOjU6ImFkZG9uIjtzOjQ6Im5hbWUiO3M6MTA6Ik1vdmllZ2FtZXMiO3M6ODoiY2F0ZWdvcnkiO3M6NjoibGVnYWN5IjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6MTA2OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzL3BzaWxvL3RoZW1lLzExNjEtLS1tb3ZpZWdhbWVzX3YxLjAtLS1zczEyMzE0NTE5MzYuODcuanBnIjt9czo0OiJkYXRlIjtzOjEwOiIyMDA5LTAxLTA4IjtzOjc6InZlcnNpb24iO3M6MzoiMS4wIjtzOjk6InRodW1ibmFpbCI7czoxMzA6Imh0dHBzOi8vZTEwNy5vcmcvdGh1bWIucGhwP2F3PTIwMCZhaD0xNjAmc3JjPWVfUExVR0lOL2FkZG9ucy9hZGRvbl9pbWFnZXMvcHNpbG8vdGhlbWUvMTE2MS0tLW1vdmllZ2FtZXNfdjEuMC0tLXNzMTIzMTQ1MTkzNi44Ny5qcGciO3M6MzoidXJsIjtzOjY1OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25zLnBocD9pZD02MiZhbXA7bW9kYWw9MSI7czo2OiJhdXRob3IiO3M6OToidGhyZHJzZHduIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czoxMDI6IlRoZW1lIEkgbWFkZSBmb3IgbXkgd2Vic2l0ZS4gSSBtYWRlIGEgcHVibGljIHZlcnNpb24gb2YgaXQuIGh0dHA6Lzp3d3cubW92aWVnYW1lcy5jby5uciBmb3IgbW9yZSBpbmZvLiI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMjoidGhlbWVtYW5hZ2VyL29ubGluZS80NiI7YToxNjp7czoyOiJpZCI7czoyOiI0NiI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czoxNToiQ09ENCBDbGFuIFRoZW1lIjtzOjg6ImNhdGVnb3J5IjtzOjY6ImdhbWluZyI7czo3OiJwcmV2aWV3IjthOjE6e2k6MDtzOjk5OiJodHRwczovL2UxMDcub3JnL2UxMDdfcGx1Z2lucy9hZGRvbnMvYWRkb25faW1hZ2VzLzEwNDAtLS1jb2Q0X2NsYW5fdGhlbWVfdjEuMC0tLXNzMTIyNjE2NTE0My40NS5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMDgtMTEtMDgiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEyMzoiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy8xMDQwLS0tY29kNF9jbGFuX3RoZW1lX3YxLjAtLS1zczEyMjYxNjUxNDMuNDUucG5nIjtzOjM6InVybCI7czo2NToiaHR0cHM6Ly9lMTA3Lm9yZy9lMTA3X3BsdWdpbnMvYWRkb25zL2FkZG9ucy5waHA/aWQ9NDYmYW1wO21vZGFsPTEiO3M6NjoiYXV0aG9yIjtzOjY6IlVzZXI1NCI7czo3OiJ3ZWJzaXRlIjtOO3M6MTM6ImNvbXBhdGliaWxpdHkiO3M6MToiMSI7czoxMToiZGVzY3JpcHRpb24iO3M6MjQ4OiJDYWxsIE9GIER1dHkgNCBDbGFuIHRoZW1lIGJ5IFVzZXI1NAoKRmVhdHVyZXM6CjMgY29sdW1uCmZpeGVkIHdpZHRoIDEwMDBweApDdXN0b20gcGFnZXMKdW5pcXVlIGRlc2lnbgpjcnlzdGFsIGZvcnVtIGljb25zCjIgbWVudSBhcmVhcwoxMDAlIHN1cHBvcnQKCjEwMCUgWEhUTUwgMS4xIGFuZCBDU1MgTGV2ZWwgMi4xIENvbXBsaWFudC4KClRlc3RlZCBpbiBGaXJlZm94IDIsIDMsIElFIDcsIDgsIE9wZXJhLCBDaHJvbWUsIFNhZmFyaSI7czo1OiJwcmljZSI7czowOiIiO3M6ODoibGl2ZWRlbW8iO3M6MDoiIjt9czoyMjoidGhlbWVtYW5hZ2VyL29ubGluZS8zOSI7YToxNjp7czoyOiJpZCI7czoyOiIzOSI7czo0OiJ0eXBlIjtzOjU6InRoZW1lIjtzOjQ6Im1vZGUiO3M6NToiYWRkb24iO3M6NDoibmFtZSI7czo5OiJCRjpIZXJvZXMiO3M6ODoiY2F0ZWdvcnkiO3M6NjoiZ2FtaW5nIjtzOjc6InByZXZpZXciO2E6MTp7aTowO3M6ODU6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbl9pbWFnZXMvNjEtLS1iZmhlcm9lcy0tLXNzMTIyMTYwNzAzNi43My5wbmciO31zOjQ6ImRhdGUiO3M6MTA6IjIwMDgtMDktMTYiO3M6NzoidmVyc2lvbiI7czozOiIxLjAiO3M6OToidGh1bWJuYWlsIjtzOjEwOToiaHR0cHM6Ly9lMTA3Lm9yZy90aHVtYi5waHA/YXc9MjAwJmFoPTE2MCZzcmM9ZV9QTFVHSU4vYWRkb25zL2FkZG9uX2ltYWdlcy82MS0tLWJmaGVyb2VzLS0tc3MxMjIxNjA3MDM2LjczLnBuZyI7czozOiJ1cmwiO3M6NjU6Imh0dHBzOi8vZTEwNy5vcmcvZTEwN19wbHVnaW5zL2FkZG9ucy9hZGRvbnMucGhwP2lkPTM5JmFtcDttb2RhbD0xIjtzOjY6ImF1dGhvciI7czo3OiJyb29mZG9nIjtzOjc6IndlYnNpdGUiO047czoxMzoiY29tcGF0aWJpbGl0eSI7czoxOiIxIjtzOjExOiJkZXNjcmlwdGlvbiI7czo0MDQ6IkdldCB5b3VyIGNsYW4gc2l0ZXMgcmVhZHkgZm9yIHRoZSByZWxlYXNlIG9mIHRoZSBmcmVlIEZQUyBnYW1lICdCYXR0bGVmaWVsZCBIZXJvZXMnIHdpdGggdGhpcyBleGNpdGluZyBhbmQgZnVua3kgdGhlbWUhCgpUaGVtZSBGZWF0dXJlcyBpbmNsdWRlOgotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQoKLSBGaXhlZCB3aWR0aCAoMTAwMHB4IHdpZHRoKQotIDYgTWVudSBBcmVhcyAoYWJvdmUgY2VudHJlIGNvbnRlbnQsIHJpZ2h0IHNpZGUsIGxlZnQgc2lkZSBhbmQgYmVsb3cgY2VudHJlIGNvbnRlbnQpCi0gMiBQYWdlIExheW91dHMgKDMgY29sdW1uLCAyIGNvbHVtbikKLSAnQ3J5c3RhbCBDbGVhcicgZm9ydW0gaWNvbnMgYnkgSm9laQotIFczQyBYSFRNTCAxLjEgJmFtcDthbXA7YW1wOyBDU1MgY29tcGxpYW50IjtzOjU6InByaWNlIjtzOjA6IiI7czo4OiJsaXZlZGVtbyI7czoyMjoid3d3LmRlbW8ucm9vZmRvZzc4LmNvbSI7fX1fY29va2llX3Nlc3Npb25fdmFsaWRhdGV8ZDoxNjE4NjY0ODc4O3NvZnRfY29va2llfHM6MzQ6IjEuODE0ZmFjYTJlZTVjY2M4NDE3OTAzNzAzNTMyNmI5YWMiO2VkaXRhYmxlfGE6MTp7czozMjoiMTQ5MDZjZDkwNzM3YzEwZDNmZWNkYjI1YWUyYmUzYjUiO2E6NTp7czo1OiJ0YWJsZSI7czo0OiJuZXdzIjtzOjM6InBpZCI7czo3OiJuZXdzX2lkIjtzOjQ6InZhcnMiO3M6OToibmV3c19pdGVtIjtzOjU6InBlcm1zIjtzOjQ6Ikh8SDQiO3M6MTA6InNob3J0Y29kZXMiO2E6NDp7czoxMDoibmV3c190aXRsZSI7YTozOntzOjU6ImZpZWxkIjtzOjEwOiJuZXdzX3RpdGxlIjtzOjQ6InR5cGUiO3M6NDoidGV4dCI7czo5OiJjb250YWluZXIiO3M6NDoic3BhbiI7fXM6MTY6Im5ld3NfZGVzY3JpcHRpb24iO2E6Mzp7czo1OiJmaWVsZCI7czoyMToibmV3c19tZXRhX2Rlc2NyaXB0aW9uIjtzOjQ6InR5cGUiO3M6NDoidGV4dCI7czo5OiJjb250YWluZXIiO3M6NDoic3BhbiI7fXM6OToibmV3c19ib2R5IjthOjM6e3M6NToiZmllbGQiO3M6OToibmV3c19ib2R5IjtzOjQ6InR5cGUiO3M6NDoiaHRtbCI7czo5OiJjb250YWluZXIiO3M6MzoiZGl2Ijt9czoxMjoibmV3c19zdW1tYXJ5IjthOjM6e3M6NToiZmllbGQiO3M6MTI6Im5ld3Nfc3VtbWFyeSI7czo0OiJ0eXBlIjtzOjQ6InRleHQiO3M6OToiY29udGFpbmVyIjtzOjQ6InNwYW4iO319fX0=');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_submitnews`
--

CREATE TABLE `e107nu_submitnews` (
  `submitnews_id` int(10) UNSIGNED NOT NULL,
  `submitnews_name` varchar(100) NOT NULL DEFAULT '',
  `submitnews_email` varchar(100) NOT NULL DEFAULT '',
  `submitnews_user` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `submitnews_title` varchar(200) NOT NULL DEFAULT '',
  `submitnews_category` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `submitnews_item` text NOT NULL,
  `submitnews_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `submitnews_ip` varchar(45) NOT NULL DEFAULT '',
  `submitnews_auth` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `submitnews_file` text NOT NULL,
  `submitnews_keywords` varchar(255) NOT NULL DEFAULT '',
  `submitnews_description` text,
  `submitnews_summary` text,
  `submitnews_media` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_tmp`
--

CREATE TABLE `e107nu_tmp` (
  `tmp_ip` varchar(45) NOT NULL DEFAULT '',
  `tmp_time` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `tmp_info` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_upload`
--

CREATE TABLE `e107nu_upload` (
  `upload_id` int(10) UNSIGNED NOT NULL,
  `upload_poster` varchar(100) NOT NULL DEFAULT '',
  `upload_email` varchar(100) NOT NULL DEFAULT '',
  `upload_website` varchar(100) NOT NULL DEFAULT '',
  `upload_datestamp` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `upload_name` varchar(100) NOT NULL DEFAULT '',
  `upload_version` varchar(10) NOT NULL DEFAULT '',
  `upload_file` varchar(180) NOT NULL DEFAULT '',
  `upload_ss` varchar(100) NOT NULL DEFAULT '',
  `upload_description` text NOT NULL,
  `upload_demo` varchar(100) NOT NULL DEFAULT '',
  `upload_filesize` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `upload_active` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `upload_category` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `upload_owner` varchar(50) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_user`
--

CREATE TABLE `e107nu_user` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `user_name` varchar(100) NOT NULL DEFAULT '',
  `user_loginname` varchar(100) NOT NULL DEFAULT '',
  `user_customtitle` varchar(100) NOT NULL DEFAULT '',
  `user_password` varchar(255) NOT NULL DEFAULT '',
  `user_sess` varchar(100) NOT NULL DEFAULT '',
  `user_email` varchar(100) NOT NULL DEFAULT '',
  `user_signature` text NOT NULL,
  `user_image` varchar(255) NOT NULL DEFAULT '',
  `user_hideemail` tinyint(3) UNSIGNED NOT NULL DEFAULT '1',
  `user_join` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_lastvisit` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_currentvisit` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_lastpost` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_chats` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_comments` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_ip` varchar(45) NOT NULL DEFAULT '',
  `user_ban` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `user_prefs` text NOT NULL,
  `user_visits` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_admin` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `user_login` varchar(100) NOT NULL DEFAULT '',
  `user_class` text NOT NULL,
  `user_perms` text NOT NULL,
  `user_realm` text NOT NULL,
  `user_pwchange` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_xup` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_user`
--

INSERT INTO `e107nu_user` (`user_id`, `user_name`, `user_loginname`, `user_customtitle`, `user_password`, `user_sess`, `user_email`, `user_signature`, `user_image`, `user_hideemail`, `user_join`, `user_lastvisit`, `user_currentvisit`, `user_lastpost`, `user_chats`, `user_comments`, `user_ip`, `user_ban`, `user_prefs`, `user_visits`, `user_admin`, `user_login`, `user_class`, `user_perms`, `user_realm`, `user_pwchange`, `user_xup`) VALUES
(1, 'Administrator', 'naraharinath', '', '$2y$10$uNi17R6YWKy2su4EZGvG6OhyXDcMJQJgPqwcOazJlfQmL/gsjIVzy', '', 'naraharinath@hotmail.com', '', '', 0, 1618643230, 1618643321, 1618643419, 0, 0, 0, '183.83.134.146', 0, '', 2, 1, '', '', '0', '', 1618643230, '');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_userclass_classes`
--

CREATE TABLE `e107nu_userclass_classes` (
  `userclass_id` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `userclass_name` varchar(100) NOT NULL DEFAULT '',
  `userclass_description` varchar(250) NOT NULL DEFAULT '',
  `userclass_editclass` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `userclass_parent` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `userclass_accum` varchar(250) NOT NULL DEFAULT '',
  `userclass_visibility` smallint(5) NOT NULL DEFAULT '0',
  `userclass_type` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `userclass_icon` varchar(250) NOT NULL DEFAULT '',
  `userclass_perms` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_userclass_classes`
--

INSERT INTO `e107nu_userclass_classes` (`userclass_id`, `userclass_name`, `userclass_description`, `userclass_editclass`, `userclass_parent`, `userclass_accum`, `userclass_visibility`, `userclass_type`, `userclass_icon`, `userclass_perms`) VALUES
(2, 'CONTACT PEOPLE', 'Example contact person class', 254, 0, '0,2', 0, 0, '', ''),
(3, 'NEWSLETTER', 'Subscribe to Newsletter', 0, 255, '3', 0, 0, '', ''),
(253, 'Members', 'Registered and logged in members', 250, 0, '0,253', 253, 0, '', ''),
(246, 'Search Bots', 'Identified search bots', 250, 0, '0,246', 254, 0, '', ''),
(254, 'Admin', 'Site Administrators', 250, 0, '0,254', 253, 0, '', ''),
(248, 'Forum Moderators', 'Moderators for Forums and other areas', 250, 0, '0,248', 253, 0, '', ''),
(249, 'Admins and Mods', 'Anyone able to administer something, moderate forums etc', 250, 0, '0,249', 253, 0, '', ''),
(1, 'PRIVATEMENU', 'Grants access to private menu items', 254, 0, '0,1', 0, 0, '', ''),
(247, 'New Users', 'Recently joined users', 250, 0, '0,247', 254, 0, '', ''),
(250, 'Main Admin', 'Main site Administrators', 250, 0, '0,250', 253, 0, '', ''),
(0, 'Everyone (public)', 'Fixed class', 250, 0, '0', 0, 0, '', ''),
(252, 'Guests', 'Fixed class', 250, 0, '0,252', 0, 0, '', ''),
(255, 'No One (inactive)', 'Fixed class', 250, 0, '255', 0, 0, '', ''),
(251, 'Read Only', 'Fixed class', 250, 0, '0,251', 0, 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_user_extended`
--

CREATE TABLE `e107nu_user_extended` (
  `user_extended_id` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_hidden_fields` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `e107nu_user_extended`
--

INSERT INTO `e107nu_user_extended` (`user_extended_id`, `user_hidden_fields`) VALUES
(1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `e107nu_user_extended_struct`
--

CREATE TABLE `e107nu_user_extended_struct` (
  `user_extended_struct_id` int(10) UNSIGNED NOT NULL,
  `user_extended_struct_name` varchar(255) NOT NULL DEFAULT '',
  `user_extended_struct_text` varchar(255) NOT NULL DEFAULT '',
  `user_extended_struct_type` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `user_extended_struct_parms` varchar(255) NOT NULL DEFAULT '',
  `user_extended_struct_values` text NOT NULL,
  `user_extended_struct_default` varchar(255) NOT NULL DEFAULT '',
  `user_extended_struct_read` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `user_extended_struct_write` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `user_extended_struct_required` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `user_extended_struct_signup` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `user_extended_struct_applicable` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `user_extended_struct_order` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_extended_struct_parent` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `e107nu_admin_log`
--
ALTER TABLE `e107nu_admin_log`
  ADD PRIMARY KEY (`dblog_id`),
  ADD KEY `dblog_datestamp` (`dblog_datestamp`);

--
-- Indexes for table `e107nu_audit_log`
--
ALTER TABLE `e107nu_audit_log`
  ADD PRIMARY KEY (`dblog_id`),
  ADD KEY `dblog_datestamp` (`dblog_datestamp`);

--
-- Indexes for table `e107nu_banlist`
--
ALTER TABLE `e107nu_banlist`
  ADD PRIMARY KEY (`banlist_id`),
  ADD KEY `banlist_ip` (`banlist_ip`),
  ADD KEY `banlist_datestamp` (`banlist_datestamp`),
  ADD KEY `banlist_banexpires` (`banlist_banexpires`);

--
-- Indexes for table `e107nu_comments`
--
ALTER TABLE `e107nu_comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_blocked` (`comment_blocked`),
  ADD KEY `comment_author_id` (`comment_author_id`);

--
-- Indexes for table `e107nu_core`
--
ALTER TABLE `e107nu_core`
  ADD PRIMARY KEY (`e107_name`);

--
-- Indexes for table `e107nu_core_media`
--
ALTER TABLE `e107nu_core_media`
  ADD PRIMARY KEY (`media_id`),
  ADD UNIQUE KEY `media_url` (`media_url`);

--
-- Indexes for table `e107nu_core_media_cat`
--
ALTER TABLE `e107nu_core_media_cat`
  ADD PRIMARY KEY (`media_cat_id`),
  ADD UNIQUE KEY `media_cat_category` (`media_cat_category`);

--
-- Indexes for table `e107nu_cron`
--
ALTER TABLE `e107nu_cron`
  ADD PRIMARY KEY (`cron_id`),
  ADD UNIQUE KEY `cron_function` (`cron_function`);

--
-- Indexes for table `e107nu_dblog`
--
ALTER TABLE `e107nu_dblog`
  ADD PRIMARY KEY (`dblog_id`),
  ADD KEY `dblog_datestamp` (`dblog_datestamp`);

--
-- Indexes for table `e107nu_generic`
--
ALTER TABLE `e107nu_generic`
  ADD PRIMARY KEY (`gen_id`),
  ADD KEY `gen_type` (`gen_type`);

--
-- Indexes for table `e107nu_links`
--
ALTER TABLE `e107nu_links`
  ADD PRIMARY KEY (`link_id`);

--
-- Indexes for table `e107nu_mail_content`
--
ALTER TABLE `e107nu_mail_content`
  ADD PRIMARY KEY (`mail_source_id`),
  ADD KEY `mail_content_status` (`mail_content_status`);

--
-- Indexes for table `e107nu_mail_recipients`
--
ALTER TABLE `e107nu_mail_recipients`
  ADD PRIMARY KEY (`mail_target_id`),
  ADD KEY `mail_status` (`mail_status`),
  ADD KEY `mail_detail_id` (`mail_detail_id`);

--
-- Indexes for table `e107nu_menus`
--
ALTER TABLE `e107nu_menus`
  ADD PRIMARY KEY (`menu_id`);

--
-- Indexes for table `e107nu_news`
--
ALTER TABLE `e107nu_news`
  ADD PRIMARY KEY (`news_id`),
  ADD KEY `news_category` (`news_category`),
  ADD KEY `news_start_end` (`news_start`,`news_end`),
  ADD KEY `news_datestamp` (`news_datestamp`),
  ADD KEY `news_sticky` (`news_sticky`),
  ADD KEY `news_render_type` (`news_render_type`),
  ADD KEY `news_class` (`news_class`);

--
-- Indexes for table `e107nu_news_category`
--
ALTER TABLE `e107nu_news_category`
  ADD PRIMARY KEY (`category_id`),
  ADD KEY `category_order` (`category_order`);

--
-- Indexes for table `e107nu_online`
--
ALTER TABLE `e107nu_online`
  ADD KEY `online_ip` (`online_ip`),
  ADD KEY `online_ip_user_id` (`online_ip`,`online_user_id`),
  ADD KEY `online_timestamp` (`online_timestamp`);

--
-- Indexes for table `e107nu_page`
--
ALTER TABLE `e107nu_page`
  ADD PRIMARY KEY (`page_id`);

--
-- Indexes for table `e107nu_page_chapters`
--
ALTER TABLE `e107nu_page_chapters`
  ADD PRIMARY KEY (`chapter_id`),
  ADD KEY `chapter_order` (`chapter_order`);

--
-- Indexes for table `e107nu_plugin`
--
ALTER TABLE `e107nu_plugin`
  ADD PRIMARY KEY (`plugin_id`),
  ADD UNIQUE KEY `plugin_path` (`plugin_path`);

--
-- Indexes for table `e107nu_rate`
--
ALTER TABLE `e107nu_rate`
  ADD PRIMARY KEY (`rate_id`);

--
-- Indexes for table `e107nu_rss`
--
ALTER TABLE `e107nu_rss`
  ADD PRIMARY KEY (`rss_id`),
  ADD KEY `rss_name` (`rss_name`);

--
-- Indexes for table `e107nu_session`
--
ALTER TABLE `e107nu_session`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `e107nu_submitnews`
--
ALTER TABLE `e107nu_submitnews`
  ADD PRIMARY KEY (`submitnews_id`);

--
-- Indexes for table `e107nu_tmp`
--
ALTER TABLE `e107nu_tmp`
  ADD KEY `tmp_ip` (`tmp_ip`),
  ADD KEY `tmp_time` (`tmp_time`);

--
-- Indexes for table `e107nu_upload`
--
ALTER TABLE `e107nu_upload`
  ADD PRIMARY KEY (`upload_id`),
  ADD KEY `upload_active` (`upload_active`);

--
-- Indexes for table `e107nu_user`
--
ALTER TABLE `e107nu_user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD UNIQUE KEY `user_loginname` (`user_loginname`),
  ADD KEY `join_ban_index` (`user_join`,`user_ban`);

--
-- Indexes for table `e107nu_userclass_classes`
--
ALTER TABLE `e107nu_userclass_classes`
  ADD PRIMARY KEY (`userclass_id`);

--
-- Indexes for table `e107nu_user_extended`
--
ALTER TABLE `e107nu_user_extended`
  ADD PRIMARY KEY (`user_extended_id`);

--
-- Indexes for table `e107nu_user_extended_struct`
--
ALTER TABLE `e107nu_user_extended_struct`
  ADD PRIMARY KEY (`user_extended_struct_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `e107nu_admin_log`
--
ALTER TABLE `e107nu_admin_log`
  MODIFY `dblog_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `e107nu_audit_log`
--
ALTER TABLE `e107nu_audit_log`
  MODIFY `dblog_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_banlist`
--
ALTER TABLE `e107nu_banlist`
  MODIFY `banlist_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_comments`
--
ALTER TABLE `e107nu_comments`
  MODIFY `comment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_core_media`
--
ALTER TABLE `e107nu_core_media`
  MODIFY `media_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `e107nu_core_media_cat`
--
ALTER TABLE `e107nu_core_media_cat`
  MODIFY `media_cat_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `e107nu_cron`
--
ALTER TABLE `e107nu_cron`
  MODIFY `cron_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_dblog`
--
ALTER TABLE `e107nu_dblog`
  MODIFY `dblog_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_generic`
--
ALTER TABLE `e107nu_generic`
  MODIFY `gen_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `e107nu_links`
--
ALTER TABLE `e107nu_links`
  MODIFY `link_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `e107nu_mail_content`
--
ALTER TABLE `e107nu_mail_content`
  MODIFY `mail_source_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_mail_recipients`
--
ALTER TABLE `e107nu_mail_recipients`
  MODIFY `mail_target_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_menus`
--
ALTER TABLE `e107nu_menus`
  MODIFY `menu_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `e107nu_news`
--
ALTER TABLE `e107nu_news`
  MODIFY `news_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `e107nu_news_category`
--
ALTER TABLE `e107nu_news_category`
  MODIFY `category_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `e107nu_page`
--
ALTER TABLE `e107nu_page`
  MODIFY `page_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `e107nu_page_chapters`
--
ALTER TABLE `e107nu_page_chapters`
  MODIFY `chapter_id` int(4) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_plugin`
--
ALTER TABLE `e107nu_plugin`
  MODIFY `plugin_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `e107nu_rate`
--
ALTER TABLE `e107nu_rate`
  MODIFY `rate_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_rss`
--
ALTER TABLE `e107nu_rss`
  MODIFY `rss_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `e107nu_submitnews`
--
ALTER TABLE `e107nu_submitnews`
  MODIFY `submitnews_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_upload`
--
ALTER TABLE `e107nu_upload`
  MODIFY `upload_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `e107nu_user`
--
ALTER TABLE `e107nu_user`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `e107nu_user_extended_struct`
--
ALTER TABLE `e107nu_user_extended_struct`
  MODIFY `user_extended_struct_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
