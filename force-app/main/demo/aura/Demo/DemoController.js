({
	doInit : function(component, event, helper) {
        component.set('v.data', {
            '棒骨' : {
                'FX.Frozen Volume Forecast' : false,
                'FX.Frozen Revenue Forecast' : true,
                'GA.Frozen Volume Forecast' : true,
                'GA.Frozen Revenue Forecast' : true,
                'Payment.Frozen Volume Forecast' : true,
                'Payment.Frozen Revenue Forecast' : true
            },
            '易斯会.EasyTransfer1' : {
                'FX.Frozen Volume Forecast' : true,
                'FX.Frozen Revenue Forecast' : true,
                'GA.Frozen Volume Forecast' : true,
                'GA.Frozen Revenue Forecast' : true,
                'Payment.Frozen Volume Forecast' : true,
                'Payment.Frozen Revenue Forecast' : true
            },
            '易斯会.EasyTransfer2' : {
                'FX.Frozen Volume Forecast' : true,
                'FX.Frozen Revenue Forecast' : true,
                'GA.Frozen Volume Forecast' : true,
                'GA.Frozen Revenue Forecast' : true,
                'Payment.Frozen Volume Forecast' : true,
                'Payment.Frozen Revenue Forecast' : true
            },
            'jd' : {
                'FX.Frozen Volume Forecast' : false,
                'FX.Frozen Revenue Forecast' : true,
                'GA.Frozen Volume Forecast' : true,
                'GA.Frozen Revenue Forecast' : true,
                'Payment.Frozen Volume Forecast' : true,
                'Payment.Frozen Revenue Forecast' : true
            }
        });

        component.set('v.data2', {
            'A.Apple' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAYMENT' : true,
                'Available.Order Source.Link' : true,
                'Available.Order Source.File Upload' : false,
                'Available.Order Source.Delete' : false
            },
            'B' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAYMENT' : false,
                'Available.Order Source.Link' : true,
                'Available.Order Source.File Upload' : false,
                'Available.Order Source.Delete' : false
            },
            'C.Apple.Red' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAYMENT' : true,
                'Available.Order Source.Link' : false,
                'Available.Order Source.File Upload' : true,
                'Available.Order Source.Delete' : false
            },
            'C.Apple.Blue' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAYMENT' : true,
                'Available.Order Source.Link' : false,
                'Available.Order Source.File Upload' : true,
                'Available.Order Source.Delete' : false
            },
            'C.Banana' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAYMENT' : true,
                'Available.Order Source.Link' : false,
                'Available.Order Source.File Upload' : true,
                'Available.Order Source.Delete' : false
            },
            'D.Pear.Yellow' : {
                'Not Avaliable.P1' : true,
                'Not Avaliable.P2' : true,
                'Available.PAYMENT' : true,
                'Available.Order Source.Link' : false,
                'Available.Order Source.File Upload' : true,
                'Available.Order Source.Delete' : false
            }
        });
	}
})