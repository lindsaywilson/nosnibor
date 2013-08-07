<?php
/**
 * @file
 * feature_blog_feature.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function feature_blog_feature_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function feature_blog_feature_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function feature_blog_feature_image_default_styles() {
  $styles = array();

  // Exported image style: feature_blog.
  $styles['feature_blog'] = array(
    'name' => 'feature_blog',
    'effects' => array(
      26 => array(
        'label' => 'EPSA Image Crop',
        'help' => '',
        'effect callback' => 'epsacrop_crop_image',
        'form callback' => 'epsacrop_crop_image_form',
        'module' => 'epsacrop',
        'name' => 'epsacrop_crop',
        'data' => array(
          'width' => 940,
          'height' => 400,
          'anchor' => 'center-top',
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

  // Exported image style: news_thumb.
  $styles['news_thumb'] = array(
    'name' => 'news_thumb',
    'effects' => array(
      28 => array(
        'label' => 'Scale and crop',
        'help' => 'Scale and crop will maintain the aspect-ratio of the original image, then crop the larger dimension. This is most useful for creating perfectly square thumbnails without stretching the image.',
        'effect callback' => 'image_scale_and_crop_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'image_resize_form',
        'summary theme' => 'image_resize_summary',
        'module' => 'image',
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 280,
          'height' => 280,
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
function feature_blog_feature_node_info() {
  $items = array(
    'feature_blog' => array(
      'name' => t('Feature Blog'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
