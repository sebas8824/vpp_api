//Full entity for mongodb/elasticSearch or redis

{	
	customer: {
		contact: {
			contactFullName: { type: String },
			position: { type: Number },
			phone: { type: String },
			e-mail: { type:  String},
			city: { type: String},
			country: { type: String }, //Default Colombia or CO
			username: { type: String },
			role: { type: String }, //Default Admin
			password: { type: String }
		},
		business: {
			businessFullName: { type: String },
			businessLocation: {
				businessAddress: { type: String },
				businessLocality: { type: String }
			}
			businessPhone: { type: String },
			businessEmail: { type: String },
			schedules: {
				opening: { type: String },
				closure: { type: String }
			},
			businessImages: {
				insideImg1: {
					url: { type: String },
					name: { type: String },
					position: { type: Number } //Further versions, by now its 0 by default.
				},
				insideImg2: {
					url: { type: String },
					name: { type: String },
					position: { type: Number } //Further versions, by now its 0 by default.
				},
				insideImg3: {
					url: { type: String },
					name: { type: String },
					position: { type: Number } //Further versions, by now its 0 by default.
				}
			}			
		},
		offer: {
			firstOffer: {
				offerName: { type: String },
				offerDesc: { type: String },
				offerImg: { type: String }
			},
			secondOffer: {
				offerName: { type: String },
				offerDesc: { type: String },
				offerImg: { type: String }
			},
			thirdOffer: {
				offerName: { type: String },
				offerDesc: { type: String },
				offerImg: { type: String }
			}
		}		
	}
}