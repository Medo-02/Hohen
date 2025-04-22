package com.hohenheim.store.service;

import com.hohenheim.store.dto.Purchase;
import com.hohenheim.store.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
