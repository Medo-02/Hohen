package com.hohenheim.store.dto;

public class PurchaseResponse {

    private String orderTrackingNumber;

    public PurchaseResponse(String orderTrackingNumber) {
        this.orderTrackingNumber = orderTrackingNumber;
    }

    public String getOrderTrackingNumber() {
        return orderTrackingNumber;
    }

    public void setOrderTrackingNumber(String orderTrackingNumber) {
        this.orderTrackingNumber = orderTrackingNumber;
    }

    @Override
    public String toString() {
        return "PurchaseResponse{" +
                "orderTrackingNumber='" + orderTrackingNumber + '\'' +
                '}';
    }
}
