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
				"schedule": "",
				"totalIncome": 2000000,
				"totalBooked": 34,
				"totalCancel": 2,
			},
		],		
	}
}