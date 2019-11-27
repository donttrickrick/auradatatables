({
	doInit : function(component, event, helper) {
        component.set('v.data', {
            '小明' : {
                '语文.期中考试' : 77,
                '语文.期末考试' : 97,
                '英语.期中考试' : 47,
                '英语.期末考试' : 47,
                '大数学.期中考试' : 87,
                '大数学.期末考试' : 37
            },
            '小黄' : {
                '语文.期中考试' : 66,
                '语文.期末考试' : 96,
                '英语.期中考试' : 96,
                '英语.期末考试' : 96,
                '大数学.期中考试' : 86,
                '大数学.期末考试' : 76
            },
            '小红' : {
                '语文.期中考试' : 100,
                '语文.期末考试' : 100,
                '英语.期中考试' : 100,
                '英语.期末考试' : 100,
                '大数学.期中考试' : 100,
                '大数学.期末考试' : 100
            }
        });

        component.set('v.data2', {
            'A.Apple' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAY' : true,
                'Available.Order Source.Link' : true,
                'Available.Order Source.File Upload' : false,
                'Available.Order Source.Delete' : false
            },
            'B' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAY' : false,
                'Available.Order Source.Link' : true,
                'Available.Order Source.File Upload' : false,
                'Available.Order Source.Delete' : false
            },
            'C.Apple.Red' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAY' : true,
                'Available.Order Source.Link' : false,
                'Available.Order Source.File Upload' : true,
                'Available.Order Source.Delete' : false
            },
            'C.Apple.Blue' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAY' : true,
                'Available.Order Source.Link' : false,
                'Available.Order Source.File Upload' : true,
                'Available.Order Source.Delete' : false
            },
            'C.Banana' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAY' : true,
                'Available.Order Source.Link' : false,
                'Available.Order Source.File Upload' : true,
                'Available.Order Source.Delete' : false
            },
            'D.Pear.Yellow' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAY' : true,
                'Available.Order Source.Link' : false,
                'Available.Order Source.File Upload' : true,
                'Available.Order Source.Delete' : false
            }
        });
	}
})