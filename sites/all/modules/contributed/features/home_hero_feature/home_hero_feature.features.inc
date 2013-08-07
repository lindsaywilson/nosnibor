<?php
/**
 * @file
 * home_hero_feature.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function home_hero_feature_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function home_hero_feature_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function home_hero_feature_image_default_styles() {
  $styles = array();

  // Exported image style: home_hero.
  $styles['home_hero'] = array(
    'name' => 'home_hero',
    'effects' => array(
      29 => array(
        'label' => 'EPSA Image Crop',
        'help' => '',
        'effect callback' => 'epsacrop_crop_image',
        'form callback' => 'epsacrop_crop_image_form',
        'module' => 'epsacrop',
        'name' => 'epsacrop_crop',
        'data' => array(
          'width' => 1800,
          'height' => 400,
          'anchor' => 'center-center',
          'jcrop_settings' => array(
            'aspect_ratio' => '',
            'bgcolor' => 'black',
            'bgopacity' => 0.6,
          ),
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function home_hero_feature_node_info() {
  $items = array(
    'hero_image' => array(
      'name' => t('Hero Image'),
      'base' => 'node_content',
      'description' => t('A large hero feature to include at the top of the home page'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
