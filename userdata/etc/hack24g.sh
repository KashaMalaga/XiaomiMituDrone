#! /system/bin/sh
if  [ ! -f "/data/local/wifi_24g_hack.done" ]; then
  rand=`echo $RANDOM | busybox md5sum | busybox cut -c 5-10`
  busybox sed -i -e "s/^ssid=.*/ssid=MiDroneMini_$rand/" /data/etc/hostapd.conf
  touch "/data/local/wifi_24g_hack.done"
  sync
fi
