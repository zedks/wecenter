﻿(function () {
    function WecenterImageDialog(editor) {
 
        return {
            title: '插入图片',
            minWidth: 470,
            minHeight: 110,
            buttons: [
                CKEDITOR.dialog.okButton,
                CKEDITOR.dialog.cancelButton
            ],
            contents:
            [
                {
                    elements:
                    [
                        {
                            id: 'text',
                            type: 'text',
                            required: true,
                            validate: CKEDITOR.dialog.validate.notEmpty('链接地址不能为空'),
                            commit: function () {
                                this.imageElement = editor.document.createElement( 'img' );
                                this.imageElement.setAttribute( 'src', this.getValue() );
                                editor.insertElement( this.imageElement );
                            }
                        },
                        {
                            type: 'html',
                            html : '<p style="font-size:14px;color:#999;">如需要插入本地图片, 请用编辑器下面上传附件功能上传后再插入!</p>'
                        }
                    ]
                }
            ],
            onLoad: function () {
                //alert('onLoad');
            },
            onShow: function () {
                //alert('onShow');
            },
            onHide: function () {
                //alert('onHide');
            },
            onOk: function () {
                this.commitContent();
            },
            onCancel: function () {
                //alert('onCancel');
            },
            resizable: false
        };
    }
 
    CKEDITOR.dialog.add('WecenterImage', function (editor) {
        return WecenterImageDialog(editor);
    });
})();