<?php

/**
 * @var   \Silksoftwarecorp\Widget\Block\Widget\Colour\Picker $block
 */

$colorInfo = $block->getColourPickerInfo(); //完整初始化数据

//优先级-记录优先，其次widget配置，其次默认底图
$defaultCompositeImage = $colorInfo['default_composite_image'];
$defaultPart1Image = $colorInfo['default_part1_image'];
$defaultPart2Image = $colorInfo['default_part2_image'];
?>

<?php foreach ($colorInfo['data'] as $key => $group) : ?>
    <div class="colour_picker_widget container" data-part1-image="<?= $defaultPart1Image ?>" data-part2-image="<?= $defaultPart2Image ?>" data-composite-image="<?= $defaultCompositeImage ?>" data-widget-group="<?= $key ?>">
        <div class="container">
            <?php $requiredPart = $group['required_part'] ?>
            <div class="mobile_header">
                <?php if ($block->getData('title')) : ?>
                    <div class="mobile_title"><?php echo $block->getData('title'); ?></div>
                <?php endif; ?>

                <?php if ($block->getData('description')) : ?>
                    <div class="mobile_description"><?php echo $block->getData('description'); ?></div>
                <?php endif; ?>
            </div>

            <div class="left">
                <div class="left-one composite" videoUrl="<?= $group['selected_composite']['video'] ?>">
                    <img class="composite-image" src="<?= $group['selected_composite']['image'] ?>" />
                    <div class="video-wrapper video-hidden">
                        <video id="video-<?= $key ?>" class="video-js" controls preload="auto" width="100%" height="auto" data-setup='{}'>
                            <?php if (!empty($group['selected_composite']['video'])) : ?>
                                <source src="<?=$group['selected_composite']['video']?>" type="video/mp4">
                            <?php endif; ?>
                        </video>
                    </div>
                    <div class="play-btn-wrapper <?= empty($group['selected_composite']['video']) ? 'video-hidden ' : '' ?>">
                        <span class="play-btn-icon"></span>
                        <span class="play-btn-text">查看 360°</span>
                    </div>

                </div>

                <div class="left-two">
                    <div class="middle-top">
                        <img class="part-image-2" src="<?= $group['selected_part_image']['part1_image'] ?>" alt="">
                    </div>
                    <div class="middle-bottom">
                        <img class="part-image-3" src="<?= $group['selected_part_image']['part2_image'] ?>" alt="">
                    </div>
                </div>
            </div>

            <div class="right">
                <?php if ($block->getData('title')) : ?>
                    <div class="title"><?php echo $block->getData('title'); ?></div>
                <?php endif; ?>

                <?php if ($block->getData('description')) : ?>
                    <div class="description"><?php echo $block->getData('description'); ?></div>
                <?php endif; ?>

                <div class="colour_picker_group" data-required-part="<?= implode(',', $requiredPart) ?>" data-widget-group="<?= $key ?>">
                    <?php $i = 1; ?>
                    <?php foreach ($group['group'] as $partName => $part) : ?>

                        <div class="colour_picker_part_item <?= $part['part_mandatory'] ? '' : '' ?>" data-part="<?= $partName ?>">
                            <label class="colour_picker_part_item_label <?= $part['part_mandatory'] ? '' : '' ?>">
<!--                                <span class="colour_picker_part_item_name">--><?php //= $part['part_name'] . '-' . $partName; ?><!----><?php //= $part['part_mandatory'] ? '-*' : '' ?><!-- </span>-->
                                <span class="colour_picker_part_item_name"><?= $part['part_name']?></span>：<span class="colour_picker_part_item_color_name"><?=$part['selected_color_name'] ?>
                            </label>
                            <ul class="colour_picker_part_color " data-part-number="<?= $i++; ?>">
                                <?php $selectedColorId = $part['selected_color_id']; ?>
                                <?php foreach ($part['colors'] as $color) : ?>
                                    <li class="colour_picker_part_color_wrapper">
                                        <div class="colour_picker_part_color_item_border <?= $color['id'] == $selectedColorId ? 'selected' : '' ?>">
                                            <?php if (!empty($color['timage'])) : ?>
                                                <div class="colour_picker_part_color_item <?= $color['id'] == $selectedColorId ? 'selected' : '' ?>" data-color-id="<?= $color['id'] ?>" data-part="<?= $partName ?>" data-hash="<?= $color['hash'] ?>" data-color="<?= $color['color'] ?>" data-color-name="<?= $color['name'] ?>" style="">
                                                    <img src="<?= $color['timage'] ?>" alt="" style="border-radius:100%" />
                                                    <div class="image_mark"></div>
                                                </div>
                                            <?php else : ?>
                                                <div class="colour_picker_part_color_item <?= $color['id'] == $selectedColorId ? 'selected' : '' ?>" data-color-id="<?= $color['id'] ?>" data-part="<?= $partName ?>" data-hash="<?= $color['hash'] ?>" data-color="<?= $color['color'] ?>" data-color-name="<?= $color['name'] ?>" style="background: <?= $color['hash'] ?>">
                                                    <div class="image_mark"></div>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    <?php endforeach; ?>

                </div>
            </div>
        </div>
    </div>
    <hr class="saying_black_line">
<?php endforeach; ?>

<script type="text/x-magento-init">
    {
        "*": {
            "Silksoftwarecorp_Widget/js/colour/picker": {
            }
        }
    }


</script>