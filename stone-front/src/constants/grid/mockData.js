export const getMockCustomerData = (nameFilter) => {
    const data = [
        { id: 1, custNm: "유재석", phone: "010-1234-5678", chargeAmt: 10000, addr: "서울 강남구" },
        { id: 2, custNm: "박명수", phone: "010-2345-6789", chargeAmt: 12000, addr: "서울 마포구" },
        { id: 3, custNm: "정준하", phone: "010-3456-7890", chargeAmt: 9000, addr: "서울 송파구" },
        { id: 4, custNm: "하하", phone: "010-4567-8901", chargeAmt: 11000, addr: "서울 종로구" },
        { id: 5, custNm: "정형돈", phone: "010-5678-9012", chargeAmt: 9500, addr: "서울 용산구" },
        { id: 6, custNm: "노홍철", phone: "010-6789-0123", chargeAmt: 13000, addr: "서울 성동구" },
    ];

    if (!nameFilter) return data;
    return data.filter((item) => item.custNm.includes(nameFilter));
};
