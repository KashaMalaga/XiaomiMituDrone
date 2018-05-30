# XiaomiMituDrone
Unpacked firmware for researching purpose. This include 2.4ghz Wifi patch

Contains the information about the wifi interface: /userdata/etc/hostapd.conf

WLAN Firmware config :) /userdata/etc/firmware/wlan/qcom_cfg.ini

Just needed to edit:
#SOFTAP Channel Range selection Operating band
 0:2.4GHZ 
 1: LOW-5GHZ 
 2:MID-5GHZ 
 3:HIGH-5GHZ 
 4: 4.9HZ BAND
 
gAPChannelSelectOperatingBand=0

Added: File to Have 5Ghz Wifi in Europe
mi_drone_mini_KashaMalaga_5Ghz_userdata.bins

