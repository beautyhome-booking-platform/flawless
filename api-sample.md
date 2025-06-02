GET customers:
{
	"message": "Successfully retrieved the list of customers",
	"result": {
		"data": [
			{
				"idCustomer": "CU-001",
				"nameCustomer": "Sarah Miller",
				"avatar": "jkshfasjf",
				"artist": [
					{
						// filter theo idCustomer
						"id": "AR-001",
						"name": "Dr. Olivia Grant",
					}
				],
				"services": [
					{
						"id": "SE-001",
						"name": "Makeup",
						"description": "abcxyznkjcfhdkj",
						"payment-status": -1(unsuccessful)/0(pending)/1(paid),
						"timebooking": "2025-09-12 - 09:00 AM",
					},
										{
						"id": "SE-002",
						"name": "Makeup",
						"description": "abcxyznkjcfhdkj",
						"payment-status": -1(unsuccessful)/0(pending)/1(paid),
						"timebooking": "2025-09-13 - 09:00 AM",
					},
				],
				"status": 0(banded)/1(available),
				"gender": -1(female)/0(unknown)/1(male),
				"phone": 0123456789,
				"email": "dhwkskw@gmail.com",
				"address": "123 Lê Văn Việt, TP.HCM",
				"note": "dshcfhdjflowjfoj",
			},
		],		
	}
}

GET artists: 
{
	"message": "Successfully retrieved the list of customers",
	"result": {
		"data": [
			{
				"idArtist": "CU-001",
				"nameArtist": "Sarah Miller",
				"avatar": "jkshfasjf",
				"specialty": "Dermatology",
				"status": 0(banded)/1(available),
				"gender": -1(female)/0(unknown)/1(male),
				"phone": 0123456789,
				"email": "dhwkskw@gmail.com",
				"dob": "2003/01/21",
				"bankAccount": {
					"bank": "VietCombank",
					"stk": 7264728645263985,
					"name": "Sarah Miller"
				},
				"address": "123 Lê Văn Việt, TP.HCM",
				"areaBook": "tên thành phố/quận"
				"note": "dshcfhdjflowjfoj",
				"aboutArtist": "sdsaddsafwdsfefwefwe",
				"timeJoin": "2023/06/21",
				"services": [
					{
						"id": "SE-001",
						"name": "Makeup",
						"price": 2000000,
						"description": "abcxyznkjcfhdkj",
						"status": 0(banded)/1(available),
					},
										{
						"id": "SE-002",
						"name": "Makeup",
						"price": 5000000,
						"description": "abcxyznkjcfhdkj",
					},
				],
				"certificate": [
					{
						"name": "The World Standard for Beauty and Spa Therapy",
						"img": "cfjdsljf.pdf",
						"time": "2024/01/06",
						"status": 0(expired)/1(available),
					},
					{
						"name": "Bridal Makeup Certificate",
						"time": "2024/01/06",
						"status": 0(expired)/1(available),
					},
				],
				"reviewCount": 2150,
				"rating": 4.9,
				"experience": "5 years",
				"schedule": [
					{
						"customer": {
							"id": "Cu-001",
							"name": "ABC",
							"avatar": "fhjdhjferh",
							"phone": 123543646,
							"note": "ejhfjehfjkhewjk",
							"address": "74 Le Van Viet Thu Duc"							
						},
						"service": "Make up",
						"date": "Monday 19 2025",
						"time": "12:00 PM",
						"duration": "90 minute",
						"status": -1/0/1
					},
				],
				"totalIncome": 2000000,
				"totalBooked": 34,
				"totalCancel": 2,
				"totalCustomer": 10,
				"productUsed": []
			},
		],		
	}
}

GET dardboardAdmin {
	"totalRevenue": {
		"totalIcomeAllYear": number,
		"perYear": [
			{
				"year": number,
				"totalIcomePerYear": number,
				"totalNetProfitPerYear": number,
				"totalRefundPerYear": number,
				"bestIcome": {
					"month": "",
					"income": number
				},
				"bestNetProfit" : {
					"month": "",
					"netProfit": number
				},
				"bestRefund": {
					"month": "",
					"refund": number
				},
				"income": {
					"jan": number,
					"feb": number,
					"mar": number,
					"apr": number,
					"may": number,
					"jun": number,
					"jul": number,
					"aug": number,
					"sep": number,
					"oct": number,
					"nov": number,
					"dec": number,
				},
				"refund": {
					"jan": number,
					"feb": number,
					"mar": number,
					"apr": number,
					"may": number,
					"jun": number,
					"jul": number,
					"aug": number,
					"sep": number,
					"oct": number,
					"nov": number,
					"dec": number
				},
				"netProfit": {
					"jan": number,
					"feb": number,
					"mar": number,
					"apr": number,
					"may": number,
					"jun": number,
					"jul": number,
					"aug": number,
					"sep": number,
					"oct": number,
					"nov": number,
					"dec": number
				}
			},
		]
	},
	"totalBooking": {
		"totalBookingAllYear": number,
		"perYear": [
			{
				"year": number,
				"totalBookingPeryear": number,
				"bestBooking": {
					"month": "",
					"booking": number
				},
				"bestCancel": {
					"month": "",
					"cancel": number
				},
				"booking": {
					"jan": number,
					"feb": number,
					"mar": number,
					"apr": number,
					"may": number,
					"jun": number,
					"jul": number,
					"aug": number,
					"sep": number,
					"oct": number,
					"nov": number,
					"dec": number,
				},
				"cancel": {
					"jan": number,
					"feb": number,
					"mar": number,
					"apr": number,
					"may": number,
					"jun": number,
					"jul": number,
					"aug": number,
					"sep": number,
					"oct": number,
					"nov": number,
					"dec": number
				}
			},
		]
	},
	"bestArist": [
		{
			"year": number,
			"months": {
				"jan": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"feb": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"mar": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"apr": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"may": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"jun": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"jul": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"aug": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"sep": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"oct": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"nov": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				],
				"dec": [
					// lấy 5 artist có lượt booking từ trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idAr: "",
						"nameAr": "",
						"avatarAr": "",
						"status": number,
						"avgRating": number,
						"totalRevenueInMonth": number,
						"totalBookingInMonth": number,
						"totalCancelInMonth": number,
					},
				]
			}
		},
	],
	"bestService": [
		{
			"year": number,
			"months": {
				"jan": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"feb": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"mar": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"apr": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"may": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"jun": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"jul": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"aug": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"sep": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"oct": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"nov": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				],
				"dec": [
					// List 5 service được booking nhiều nhất trong 1 tháng, sắp xếp theo thứ tự giảm dần
					{
						"idSer": "",
						"nameSer": "",
						"avgRating": number
					},
				]
			}
		},
	],
	"totalCustomer": {
		"totalCustomerAllYear": number,
		"perYear": [
			{
				"year": number,
				"totalPerYear": number,
				"months": {
					"jan": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"feb": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"mar": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"apr": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"may": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"jun": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"jul": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"aug": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"sep": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"oct": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"nov": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					},
					"dec": {
						"totalCustomer": number
						"newCustomer": number,
						"returnCustomer": number,
						"cancelCustomer": number,
					}
				}
			},
		]
	},
	"totalArtist": {
		"totalArtistAllYear": number,
		"perYear": [
			{
				"year": number,
				"totalArtistPerYear": number,
				"months": {
					"jan": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"feb": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"mar": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"apr": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"may": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"jun": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"jul": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"aug": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"sep": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"oct": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"nov": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					},
					"dec": {
						"totalArtist": number,
						"newArtist": number,
						"banArtist": number,
					}
				}
			},
		]
	}
}