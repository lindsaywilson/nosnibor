<?php
/**
 * @file
 * feature_blog_feature.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function feature_blog_feature_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|feature_blog|default';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'feature_blog';
  $ds_fieldsetting->view_mode = 'default';
  $ds_fieldsetting->settings = array(
    'links' => array(
      'weight' => '5',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|feature_blog|default'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function feature_blog_feature_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|feature_blog|default';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'feature_blog';
  $ds_layout->view_mode = 'default';
  $ds_layout->layout = 'ds_2col_stacked';
  $ds_layout->settings = array(
    'regions' => array(
      'header' => array(
        0 => 'field_image',
      ),
      'left' => array(
        1 => 'title_field',
        2 => 'body',
      ),
      'right' => array(
        3 => 'field_artwork_reference',
        4 => 'field_add_to_cart_link',
        5 => 'links',
      ),
      'footer' => array(
        6 => 'field_extra_content',
      ),
    ),
    'fields' => array(
      'field_image' => 'header',
      'title_field' => 'left',
      'body' => 'left',
      'field_artwork_reference' => 'right',
      'field_add_to_cart_link' => 'right',
      'links' => 'right',
      'field_extra_content' => 'footer',
    ),
    'classes' => array(),
    'wrappers' => array(
      'header' => 'div',
      'left' => 'div',
      'right' => 'div',
      'footer' => 'div',
    ),
    'layout_wrapper' => 'div',
    'layout_attributes' => '',
    'layout_attributes_merge' => 1,
  );
  $export['node|feature_blog|default'] = $ds_layout;

  return $export;
}

/**
 * Implements hook_ds_view_modes_info().
 */
function feature_blog_feature_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'feature_blog';
  $ds_view_mode->label = 'Feature Blog';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['feature_blog'] = $ds_view_mode;

  return $export;
}
