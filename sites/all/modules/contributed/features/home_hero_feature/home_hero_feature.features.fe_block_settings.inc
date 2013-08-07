<?php
/**
 * @file
 * home_hero_feature.features.fe_block_settings.inc
 */

/**
 * Implements hook_default_fe_block_settings().
 */
function home_hero_feature_default_fe_block_settings() {
  $export = array();

  $export['version'] = '2.0';

  $export['views-hero_images-block'] = array(
    'cache' => -1,
    'css_class' => '',
    'custom' => 0,
    'delta' => 'hero_images-block',
    'module' => 'views',
    'node_types' => array(),
    'pages' => '<front>',
    'roles' => array(),
    'themes' => array(
      'adaptivetheme' => array(
        'region' => '',
        'status' => 0,
        'theme' => 'adaptivetheme',
        'weight' => 0,
      ),
      'adaptivetheme_admin' => array(
        'region' => '',
        'status' => 0,
        'theme' => 'adaptivetheme_admin',
        'weight' => 0,
      ),
      'adaptivetheme_subtheme' => array(
        'region' => '',
        'status' => 0,
        'theme' => 'adaptivetheme_subtheme',
        'weight' => 0,
      ),
      'bartik' => array(
        'region' => '',
        'status' => 0,
        'theme' => 'bartik',
        'weight' => 0,
      ),
      'corolla' => array(
        'region' => 'content',
        'status' => 1,
        'theme' => 'corolla',
        'weight' => -17,
      ),
      'seven' => array(
        'region' => '',
        'status' => 0,
        'theme' => 'seven',
        'weight' => 0,
      ),
    ),
    'title' => '',
    'visibility' => 1,
  );

  return $export;
}
