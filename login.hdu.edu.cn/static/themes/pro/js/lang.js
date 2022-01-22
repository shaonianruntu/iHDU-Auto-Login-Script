var translate = {
    'zh-CN': {
        H: "时",
        M: "分",
        S: "秒",
        E0000: "登录成功",
        E2401: "User-Request",
        E2402: "Lost-Carrier",
        E2404: "Idle-Timeout",
        E2405: "Session-Timeout",
        E2406: "Admin-Reset",
        E2407: "Admin-Reboot",
        E2408: "Port-Error",
        E2409: "NAS-Error",
        E2410: "NAS-Request",
        E2411: "NAS-Reboot",
        E2412: "Port-Unneeded",
        E2413: "Port-Preempted",
        E2414: "Port-Suspended",
        E2415: "Service-Unavailable",
        E2416: "Callback",
        E2417: "User-Error",
        E2531: "用户不存在",
        E2532: "您的两次认证的间隔太短,请稍候10秒后再重试登录",
        E2533: "密码错误次数超过限制，请5分钟后再重试登录",
        E2534: "有代理行为被暂时禁用",
        E2535: "认证系统已经被禁用",
        E2536: "授权已过期",
        E2553: "帐号或密码错误",
        E2601: "您使用的不是专用客户端,IPOE-PPPoE混杂模式请联系管理员重新打包客户端程序",
        E2602: "您还没有绑定手机号或绑定的非联通手机号码",
        E2606: "用户被禁用",
        E2607: "接口被禁用",
        E2611: "您当前使用的设备非该账号绑定设备 请绑定或使用绑定的设备登入",
        E2613: "NAS PORT绑定错误",
        E2614: "MAC地址绑定错误",
        E2615: "IP地址绑定错误",
        E2616: "用户已欠费",
        E2620: "已经在线了",
        E2621: "已经达到授权人数",
        E2806: "找不到符合条件的产品",
        E2807: "找不到符合条件的计费策略",
        E2808: "找不到符合条件的控制策略",
        E2833: "IP不在DHCP表中，需要重新拿地址。",
        E2840: "校内地址不允许访问外网",
        E2841: "IP地址绑定错误",
        E2842: "IP地址无需认证可直接上网",
        E2843: "IP地址不在IP表中",
        E2844: "IP地址在黑名单中",
        E2901: "第三方认证接口返回的错误信息",
        /*extend translate*/
        E6500: "认证程序未启动",
        E6501: "用户名输入错误",
        E6502: "注销时发生错误，或没有帐号在线",
        E6503: "您的账号不在线上",
        E6504: "注销成功，请等1分钟后登录",
        E6505: "您的MAC地址不正确",
        E6506: "用户名或密码错误，请重新输入",
        E6507: "您无须认证，可直接上网",
        E6508: "您已欠费，请尽快充值",
        E6509: "您的资料已被修改正在等待同步，请2钟分后再试。如果您的帐号允许多个用户上线，请到WEB登录页面注销",
        E6510: "您的帐号已经被删除",
        E6511: "IP已存在，请稍后再试",
        E6512: "在线用户已满，请稍后再试",
        E6513: "正在注销在线账号，请重新连接",
        E6514: "你的IP地址和认证地址不附，可能是经过小路由器登录的",
        E6515: "系统已禁止客户端登录，请使用WEB方式登录",
        E6516: "您的流量已用尽",
        E6517: "您的时长已用尽",
        E6518: "您的IP地址不合法，可能是:一、与绑的IP地址附；二、IP不允许在当前区域登录",
        E6519: "当前时段不允许连接",
        E6520: "抱歉，您的帐号已禁用",
        E6521: "您的IPv6地址不正确，请重新配置IPv6地址",
        E6522: "客户端时间不正确，请先同步时间（或者是调用方传送的时间格式不正确，不是时间戳；客户端和服务器之间时差超过2小时，括号里面内容不要提示给客户）",
        E6523: "认证服务无响应",
        E6524: "计费系统尚未授权，目前还不能使用",
        E6525: "后台服务器无响应;请联系管理员检查后台服务运行状态",
        E6526: "您的IP已经在线;可以直接上网;或者先注销再重新认证",
        E6527: "当前设备不在线",
        E6528: "您已经被服务器强制下线",
        E6529: "身份验证失败，但不返回错误消息",
        E10015: "短信发送太频繁，请一分钟后重试",
        E10016: "今天短信发送次数已用完",
        E10039: "访客账号的使用次数已超过最大限制",
        // error message
        E3001: "流量或时长已用尽",
        E3002: "计费策略条件不匹配",
        E3003: "控制策略条件不匹配",
        E3004: "余额不足",
        E3005: "在线变更计费策略",
        E3006: "在线变更控制策略",
        E3007: "超时",
        E3008: "连线数超额，挤出在线表。",
        E3009: "有代理行为",
        E3010: "无流量超时",
        E3101: "心跳包超时",
        E4001: "Radius表DM下线",
        E4002: "DHCP表DM下线",
        E4003: "Juniper IPOE COA上线",
        E4004: "Juniper IPOE COA下线",
        E4005: "proxy表DM下线",
        E4006: "COA在线更改带宽",
        E4007: "本地下线",
        E4008: "虚拟下线",
        E4009: "策略切换时下发COA",
        E4011: "结算时虚拟下线",
        E4012: "下发COA",
        E4101: "来自radius模块的DM下线（挤出在线表）",
        E4102: "来自系统设置（8081）的DM下线",
        E4103: "来自后台管理（8080）的DM下线",
        E4104: "来自自服务（8800）的DM下线",
        E4112: "来自系统设置（8081）的本地下线",
        E4113: "来自后台管理（8080）的本地下线",
        E4114: "来自自服务（8800）的本地下线",
        E4122: "来自系统设置（8081）的虚拟下线",
        E4123: "来自后台管理（8080）的虚拟下线",
        E4124: "来自自服务（8800）的虚拟下线",
        E2554: "EAP校验失败",
        E2555: "未绑定运营商帐号",
        E2612: "MAC在黑名单中",
        E2617: "消费额度已满",
        E5990: "数据不完整",
        E5991: "无效的参数",
        E5992: "找不到这个用户",
        E5993: "用户已存在",
        E5001: "用户创建成功",
        E5002: "用户创建失败",
        E5010: "修改用户成功",
        E5011: "修改用户失败",
        E5020: "修改用户成功",
        E5021: "修改用户失败",
        E5030: "转组成功",
        E5031: "转组失败",
        E5040: "购买套餐成功",
        E5041: "购买套餐失败",
        E5042: "找不到套餐",
        E5050: "绑定MAC认证成功",
        E5051: "解绑MAC认证成功",
        E5052: "绑定MAC成功",
        E5053: "解绑MAC成功",
        E5054: "绑定nas port成功",
        E5055: "解绑nas port成功",
        E5056: "绑定vlan id成功",
        E5057: "解绑vlan id成功",
        E5058: "绑定ip成功",
        E5059: "解绑ip成功",
        E6001: "用户缴费成功",
        E6002: "用户缴费失败",
        //结算日志
        E7001: "用户不存在",
        E7002: "添加待结算队列失败",
        E7003: "结算成功",
        E7004: "添加已结算队列失败",
        E7005: "扣除产品实例结算金额失败",
        E7006: "没有找到产品实例",
        E7007: "没有对该用户进行手动结算的权限",
        E7008: "没有对该产品进行手动结算的权限",
        E7009: "由于使用流量小于该产品结算设置而不扣费",
        E7010: "由于使用时长小于该产品结算设置而不扣费",
        E7011: "由于产品余额不足，根据结算设置而不扣费",
        E7012: "由于产品余额不足，根据结算设置余额扣为0",
        E7013: "由于产品余额不足，根据结算设置余额扣为负值",
        E7014: "删除过期套餐操作成功",
        E7015: "删除过期套餐操作失败",
        E7016: "自动购买套餐成功",
        E7017: "自动购买套餐失败",
        E7018: "产品结算模式错误",
        //new translate
        ChallengeExpireError: "Challenge时间戳错误",
        SignError: "签名错误",
        NotOnlineError: "当前设备不在线",
        VcodeError: "验证码错误",
        SpeedLimitError: "认证请求太频繁，请稍后10s重试",
        SrunPortalServerError: "Portal服务请求错误",
        AuthResaultTimeoutErr: "Portal服务请求超时",
        IpAlreadyOnlineError: "本机IP已经使用其他账号登陆在线了",
        MemoryDbError: "SRun认证服务(srun_portal_server)无响应",
        GetVerifyCode: "获取验证码",
        CasUsernameIsEmpty: "获取CAS用户名失败",
        ProvisionalReleaseFail: "临时放行失败",
        INFOFailedBASRespondTimeout: "BAS无响应",
        LogoutOK: "DM下线成功",
        SendVerifyCodeOK: "验证码发送成功",
        PhoneNumberError: "手机号错误",
        IsEvokingWeChat: "正在唤起微信...",
        Info: "信息",
        OK: "确认",
        CheckServerTimestamp: "检查服务器时间",
        TimestampError: "时间戳错误",
        TypeError: "加密类型错误",
        VerifyCodeError: "验证码错误",
        ACIDIsRequired: "缺少ACID",
        TypeIsEmptyOrError: "微信请求类型为空或错误",
        ACIDIsEmpty: "缺少ACID",
        BSSIDIsEmpty: "缺少BSSID",
        MACIsEmpty: "缺少MAC",
        TokenIsEmpty: "缺少Token",
        WeChatOptionNotFound: "未找到微信配置",
        CreateVisitorError: "创建访客失败",
        NoResponseDataError: "无响应数据",
        VcodeTooOftenError: "两次间隔时间太短",
        Wait: "请稍等...",
        YouAreNotOnline: "该设备不在线",
        NasTypeNotFound: "NAS设备不存在",
        UserMustModifyPassword: "您的密码比较简单或已长时间未修改，存在安全隐患，请登录自服务重置您的密码",
        AuthInfoError: "刷新页面后再次登录",
        TokenError: "验证码发送失败",
        MissingRequiredParametersError: "登录失败，请联系网络管理员",
        NoAcidError: "网络设备出问题，请稍候",
        OtpServerError: "身份验证器服务故障",
        OtpCodeCheckError: "口令验证失败",
        OtpCodeHasBeenUsed: "动态码已被使用",
        "E2901:(ThirdParty1)bindUser2:LdapBindError": "账号或密码错误",
        "E2901:(ThirdParty1)ldapFirstEntryError": "账号或密码错误",
        "CHALLENGEFailedBASRespondTimeout": "网络连接超时，请稍后重试",
        "INFOError锛宔rrCode=2": "设备不在认证范围内",
        "TheServerIsNotResponding": "服务等待超时，请稍后重试",
        LimitDomainErr: "请使用中科院允许的邮箱进行登录",
        BxResaultTimeoutErr: "北向接口服务器异常，请查看日志或检查北向接口服务",
        BxAddUserErr: "添加用户失败，请联系管理员",
        ZkNetworkError: "科技云服务异常",
        ZkUserError: "登录中国科技云通行证的账号无效，请检查账号是否正确",
        BrowserVersionError: "请使用 Chrome 浏览器或 360 浏览器极速模式",
        SsoServerError: "单点登陆服务异常，请检查服务",
        IPHasBeenOnlinePleaseLogout: "您的设备已经在线，不可重复提交",
        UserDoesNotExist: "该手机号未注册",
        MysqlConnectPoolIsNil: "数据库连接池为空",
        UserDoesNotExistInWhiteList: "用户不存在于白名单中",
        VisitorCoolingError: "账号已过期",
        // portal
        Username: '用户账号',
        Realname: '真实姓名',
        UsedFlow: '已用流量',
        UsedTime: '已用时长',
        Balance: '账户余额',
        Ipv4: 'IP 地址',
        ProductName: '产品名称',
        BillingName: '计费名称',
        Mac: 'Mac 地址',
        Domain: '用户域名',
        DeviceTotal: '设备总数',
        // Portal Creater
        HighBurstPlan: "认证成功，是否跳转到",
        Notify: "通知",
        Confirm: "确认",
        Cancel: "取消",
        Year: "年",
        Month: "月",
        Day: "日",
        Hour: "小时",
        Minute: "分",
        Second: "秒",
        NetErr: "网络连接错误",
        Success: "操作成功",
        Error: "操作失败",
        LogoutConfirm: "您确定要注销吗？",
        To: "至",
        Next: "下一步",
        SendAgain: " 秒后再次发送",
        ReadAgreement: "请先阅读并同意使用协议后认证",
        NewAgreement: "协议有更新，请先阅读并同意使用协议后认证",
        TimeoutError: '认证超时,请重新扫码',
        EnterUsername: "请输入账号",
        CheckByPass: "原密码验证",
        CheckBySms: "短信验证",
        CheckByMail: "邮件验证",
        EnterPassOld: "请输入原密码",
        EnterVcodeSms: "请输入短信验证码",
        GetVcodeSms: "获取短信验证码",
        EnterVcodeMail: "请输入邮件验证码",
        GetVcodeMail: "获取邮件验证码",
        EnterPassNew: "请输入新密码",
        EnterPassAgain: "请再次输入新密码",
        ErrPassOld: "旧密码不能为空",
        ErrVcodeBlank: "验证码不能为空",
        ErrUserBlank: "账号不能为空",
        ErrPassBlank: "密码不能为空",
        ErrPassRepeat: "两次密码输入不一致",
        ForgetPass: "忘记密码",
        ChangePass: "修改密码",
        ErrQueryUserDetails: "查询用户详情出现错误",
        FailedCreateUser: "创建用户失败,请联系管理员处理",
        ActiveSuccess: "用户激活成功",
        UserStatusAbnormal: "用户状态异常，请联系管理员处理",
        UserAlreadyExists: "用户已存在",
        // pay panel
        Yuan: "元",
        Back: "返回",
        Other: "其他",
        Recharge: "充值缴费",
        ChoosePackage: "选择套餐",
        ChangePackage: "更换套餐",
        PaymentAmount: "缴费金额",
        EnterPaymentAmount: "请输入缴费金额",
        ConfirmOrder: "确认订单",
        PaymentNumber: "缴费号码",
        PackageName: "套餐名称",
        PaymentMethod: "支付方式",
        ConfirmPayment: "确认付款",
        Alipay: "支付宝",
        Wechat: "微信",
        PhoneNumberFormatIsWrong: "手机号格式有误",
        PackageChanging: "套餐变更中",
        PackageChangeFailed: "套餐更改失败",
        AmountLimit: "缴费金额需大于 0 元",
        Paying: "正在支付中，请勿关闭或刷新本页面",
        AccountVerification: "需填写账号后进行充值缴费",
        PaymentConfirm: "是否完成付款？",
        CancelRecharge: "取消充值",
        RechargeSuccess: "充值成功",
        RechargeFailed: "充值失败",
        NoProducts: "没有可订购套餐",
        MobileVisitorsNotAllowed: "不允许使用手机访客",
        Close: "关闭",
        OnlineDeviceManager: "在线设备管理",
        System: "操作系统",
        Operate: "操作",
        Logout: "注销",
        ClientType: "设备类型",
        AddTime: "上线时间",
        ClientType0: "无法判断",
        ClientType1: "PC",
        ClientType2: "移动设备或其他",
        ClientType3: "PC 客户端",
        ClientType4: "移动客户端",
        ClientType5: "从 IP 表加载 (免认证)",
        ClientType6: "MAC 认证",
        ClientType7: "小程序直接认证",
        ClientType8: "小程序扫码认证",
        ClientType9: "微信认证",
        ClientType10: "LDAP",
        ClientType11: "钉钉认证",
        E2620Tips: "在线设备数量已达上限，请注销选择并注销已在线设备",
        IKnow: "我知道了",
        ToChangePassword: "去修改密码"
    },
    'en-US': {
        H: "h",
        M: "m",
        S: "s",
        E0000: "Login Success",
        E2401: "User-Request",
        E2402: "Lost-Carrier",
        E2404: "Idle-Timeout",
        E2405: "Session-Timeout",
        E2406: "Admin-Reset",
        E2407: "Admin-Reboot",
        E2408: "Port-Error",
        E2409: "NAS-Error",
        E2410: "NAS-Request",
        E2411: "NAS-Reboot",
        E2412: "Port-Unneeded",
        E2413: "Port-Preempted",
        E2414: "Port-Suspended",
        E2415: "Service-Unavailable",
        E2416: "Callback",
        E2417: "User-Error",
        E2531: "Account does not exist or has incorrect password",
        E2532: "The interval between your two certifications is too short. Please wait for 10 seconds and try logging in again.",
        E2533: "The number of incorrect passwords exceeds the limit. Please try again after 5 minutes.",
        E2534: "You have a proxy behavior, which is temporarily disabled, please try again after 5 minutes.",
        E2535: "Authentication has been disabled.",
        E2536: "License timeout.",
        E2553: "Password Error",
        E2601: "You are not using a dedicated client, IPOE-PPPoE promiscuous mode, please contact the administrator to repackage the client program",
        E2602: "You do not have a mobile number or a bound non-Unicom mobile number",
        E2606: "User is disabled",
        E2607: "Interface is disabled.",
        E2611: "The device you are currently using is not the account binding device. Please bind or use the bound device to log in.",
        E2613: "NAS PORT binding error",
        E2614: "MAC address binding error",
        E2615: "IP address binding error",
        E2616: "User has owed",
        E2620: "Already online",
        E2621: "Already authorized",
        E2806: "No products found",
        E2807: "No qualifying billing policies found",
        E2808: "No matching control policy found",
        E2833: "The IP is not in the DHCP table and needs to regain the address.",
        E2840: "The IP address is not allowed to access the Internet.",
        E2841: "IP address binding error.",
        E2842: "IP address does not require authentication.",
        E2843: "The IP address is not in the IP table.",
        E2844: "IP address in the black list.",
        E2901: "(Third party)xxxx",
        /*extend translate*/
        E6500: "Certification program did not start",
        E6501: "User name input error",
        E6502: "An error occurred while signing out, or there is no account online",
        E6503: "Your account is not online",
        E6504: "Logout successful, please wait 1 minute after login",
        E6505: "Your MAC address is incorrect",
        E6506: "The username or password is wrong, please re-enter",
        E6507: "You do not need to be certified, you can go online",
        E6508: "You have arrears, please recharge as soon as possible",
        E6509: "Your data has been modified and is waiting for synchronization. Please try again after 2 minutes. If your account allows multiple users to go online, log out to the web login page",
        E6510: "Your account has been deleted",
        E6511: "IP already exists, please try again later",
        E6512: "Online user is full, please try again later",
        E6513: "Logging off your online account, please reconnect",
        E6514: "Your IP address and authentication address are not attached. It may be via a small router.",
        E6515: "The system has disabled the client login. Please log in using WEB mode",
        E6516: "Your traffic is exhausted",
        E6517: "Your time is exhausted",
        E6518: "Your IP address is illegal and may be: 1. Attached to the attached IP address; 2. IP is not allowed to login in the current zone.",
        E6519: "Current period is not allowed to connect",
        E6520: "Sorry, your account is disabled",
        E6521: "Your IPv6 address is incorrect, please reconfigure the IPv6 address",
        E6522: "The client time is incorrect. Please synchronize the time (or the time format sent by the caller is not correct, not the timestamp; the time difference between the client and the server is more than 2 hours, and the contents in the parentheses do not prompt the user)",
        E6523: "Authentication service is not responding",
        E6524: "The billing system has not been authorized and it is not yet available",
        E6525: "The background server is not responding; contact the administrator to check the running status of the background service",
        E6526: "Your IP is online; you can go online or log out and re-authenticate",
        E6527: "The current device is offline",
        E6528: "You have been forced offline by the server",
        E6529: "Authentication failed but does not return an error message",
        E10015: "SMS is sent too frequently, please try again in one minute",
        E10016: "The number of text messages sent today has been used up",
        E10039: "The number of times the guest account has been used has exceeded the maximum limit.",
        // error message
        E3001: "Flow or time length has been exhausted",
        E3002: "Accounting policy conditions do not match",
        E3003: "Control policy conditions do not match",
        E3004: "Sorry, your credit is running low",
        E3005: "Online change billing strategy",
        E3006: "Online change control strategy",
        E3007: "timeout",
        E3008: "Connection number excess, extrusion online table.",
        E3009: "Agent behavior",
        E3010: "No flow timeout",
        E3101: "Heartbeat packet timeout",
        E4001: "Radius table DM off line",
        E4002: "DHCP table DM off line",
        E4003: "Juniper IPOE COA off line",
        E4004: "Juniper IPOE COA off line",
        E4005: "proxy table DM off line",
        E4006: "COA online change bandwidth",
        E4007: "Local offline",
        E4008: "Virtual assembly line",
        E4009: "Policy switch nowadays hair COA",
        E4011: "Virtual assembly line",
        E4012: "Promulgated COA",
        E4101: "From radius Modular DM offline（out of line table）",
        E4102: "From system settings（8081）DM offline",
        E4103: "From background management（8080）DM offline",
        E4104: "From Self service（8800）DM offline",
        E4112: "From system settings（8081）local offline",
        E4113: "From background management（8080）local offline",
        E4114: "From Self service（8800）local offline",
        E4122: "From system settings（8081）virtual offline",
        E4123: "From background management（8080）virtual offline",
        E4124: "From Self service（8800）virtual offline",
        E2554: "EAP verification failed",
        E2555: "No mobile phone bound",
        E2612: "MAC In the black list",
        E5990: "Incomplete data",
        E5991: "Invalid parameter",
        E5992: "Can not find this user",
        E5993: "User already exists",
        E5001: "Users create success",
        E5002: "Users create failure",
        E5010: "Modify user success",
        E5011: "Modify user failure",
        E5020: "Modify user success",
        E5021: "Modify user failure",
        E5030: "Turn group success",
        E5031: "Turn group failure",
        E5040: "Purchase package success",
        E5041: "Failed to buy package",
        E5042: "Can not find packages",
        E5050: "Bind MAC certified success",
        E5051: "Tied MAC certification success",
        E5052: "Bind MAC success",
        E5053: "Tied MAC success",
        E5054: "Binding nas port success",
        E5055: "Unbundling nas port success",
        E5056: "Binding vlan id success",
        E5057: "Unbundling vlan id success",
        E5058: "Binding ip success",
        E5059: "Unbundling ip success",
        E6001: "User contribution success",
        E6002: "User payment failure",
        //Settlement log
        E7001: "User does not exist",
        E7002: "Add pending queue failed",
        E7003: "Settlement success",
        E7004: "Failed to add a settled queue",
        E7005: "After deduction of product instance settlement amount failed",
        E7006: "No product instance found",
        E7007: "There is no authorization for the user to manually",
        E7008: "No authorization for manual settlement of the product",
        E7009: "due to the use of the product flow is less than the setting without fee settlement",
        E7010: "due to the use of length less than the product settings without fee settlement",
        E7011: "because of lack of balance according to the settlement setting without deductions",
        E7012: "because of lack of balance according to the settlement balance button for 0",
        E7013: "because of lack of balance according to the settlement balance buckle is negative",
        E7014: "delete expired package operation success",
        E7015: "delete expired package operation failed",
        E7016: "automatically buy packages of success",
        E7017: "automatic purchase package failure",
        E7018: "product settlement model error",
        //new translate
        ChallengeExpireError: "Challenge Expire Error",
        SignError: "Sign Error",
        NotOnlineError: "Not Online Error",
        VcodeError: "VerifyCode Error",
        SpeedLimitError: "Speed Limit Error",
        SrunPortalServerError: "Srun Portal Server Error",
        AuthResaultTimeoutErr: "Auth Resault Timeout Error",
        IpAlreadyOnlineError: "IP Already Online Error",
        MemoryDbError: "Srun Portal Server No Response",
        GetVerifyCode: "Get VerifyCode",
        CasUsernameIsEmpty: "Cas Username Is Empty",
        ProvisionalReleaseFail: "Provisional Release Fail",
        INFOFailedBASRespondTimeout: "BAS No Response",
        LogoutOK: "DM Logout Success",
        SendVerifyCodeOK: "Send VerifyCode OK",
        PhoneNumberError: "Phone Number Error",
        IsEvokingWeChat: "Is Evoking WeChat...",
        Info: "Info",
        OK: "OK",
        CheckServerTimestamp: "Check Server Timestamp",
        TimestampError: "Timestamp Error:",
        TypeError: "Sign Type Error",
        VerifyCodeError: "Verify Code Error",
        ACIDIsRequired: "ACID Is Required",
        TypeIsEmptyOrError: "Wechat Type Is Empty Or Error",
        ACIDIsEmpty: "ACID Is Empty",
        BSSIDIsEmpty: "BSSID Is Empty",
        MACIsEmpty: "MAC Is Empty",
        TokenIsEmpty: "Token Is Empty",
        WeChatOptionNotFound: "WeChat Option Not Found",
        CreateVisitorError: "Create Visitor Error",
        NoResponseDataError: "No Response Data",
        VcodeTooOftenError: "Vcode Too Often",
        Wait: "Wait Minutes...",
        YouAreNotOnline: "You Are Not Online",
        NasTypeNotFound: "Nas Type Not Found",
        UserMustModifyPassword: "Your password is relatively simple or has not been modified for a long time. There is a security risk. Please log in to reset your password from the service.",
        AuthInfoError: "Log in again after refreshing the page",
        TokenError: "Send Error",
        MissingRequiredParametersError: "Login failed, please contact the network administrator",
        NoAcidError: "There is a problem with the network device, please wait",
        OtpServerError: "Authenticator service failure",
        OtpCodeCheckError: "Password verification failed",
        OtpCodeHasBeenUsed: "Dynamic code has been used",
        "E2901:(ThirdParty1)bindUser2:LdapBindError": "Incorrect username or password",
        "E2901:(ThirdParty1)ldapFirstEntryError": "Incorrect username or password",
        "CHALLENGEFailedBASRespondTimeout": "Network connection timed out, please try again later",
        "INFOError锛宔rrCode=2": "The device is not within the scope of certification",
        "TheServerIsNotResponding": "TheServerIsNotResponding",
        LimitDomainErr: "Please use the mailbox allowed by the Chinese Academy of Sciences to log in",
        BxResaultTimeoutErr: "Northbound interface server exception, please check the log or check the northbound interface service",
        BxAddUserErr: "Add user failed, please contact administrator",
        ZkNetworkError: "technology cloud service exception",
        ZkUserError: "Tech cloud return information is invalid",
        BrowserVersionError: "Please use Chrome or 360 browser speed mode",
        SsoServerError: "Single sign-on service is abnormal, please check the service",
        IPHasBeenOnlinePleaseLogout: "IP has been online, please logout.",
        UserDoesNotExist: "User Does't Exist",
        MysqlConnectPoolIsNil: "Mysql Connect Pool IsNil",
        UserDoesNotExistInWhiteList: "User Does't Exist In White List",
        VisitorCoolingError: "Account has expired",
        // portal
        Username: 'Username',
        Realname: 'Realname',
        UsedFlow: 'Used Flow',
        UsedTime: 'Used Time',
        Balance: 'Balance',
        Ipv4: 'IP Address',
        ProductName: 'Product name',
        BillingName: 'Billing name',
        Mac: 'Mac Address',
        Domain: 'Domain',
        DeviceTotal: 'Total number of equipment',
        // Portal Creater
        HighBurstPlan: "Authentication is successful, whether to jump to",
        Notify: "Notify",
        Confirm: "Confirm",
        Cancel: "Cancel",
        Year: "Year",
        Month: "Month",
        Day: "Day",
        Hour: "Hour",
        Minute: "Minute",
        Second: "Second",
        NetErr: "Net Error",
        Success: "Success",
        Error: "Error",
        LogoutConfirm: "Are you sure you want to log out?",
        To: "To",
        Next: "Next",
        SendAgain: " Send again in seconds",
        ReadAgreement: "Please read and agree to the use agreement before authentication",
        NewAgreement: "The agreement has been updated, please read and agree to the agreement before authentication",
        TimeoutError: "Authentication timeout, please scan the code again",
        EnterUsername: "Enter Username",
        CheckByPass: "Password",
        CheckBySms: "SMS",
        CheckByMail: "Mail",
        EnterPassOld: "Enter Old Password",
        EnterVcodeSms: "Please enter SMS code",
        GetVcodeSms: "Get SMS Code",
        EnterVcodeMail: "Please enter Mail code",
        GetVcodeMail: "Get Mail Code",
        EnterPassNew: "Enter New Password",
        EnterPassAgain: "Enter New Password Again",
        ErrPassOld: "Old password cannot be empty",
        ErrVcodeBlank: "Verification code must be filled",
        ErrUserBlank: "Account cannot be empty",
        ErrPassBlank: "Password can not be blank",
        ErrPassRepeat: "The two password entries are not consistent",
        ForgetPass: "Forget Password",
        ChangePass: "Change Password",
        ErrQueryUserDetails: "An error occurred while querying user details",
        FailedCreateUser: "Failed to create user, please contact the administrator for handling",
        ActiveSuccess: "User activated successfully",
        UserStatusAbnormal: "The user status is abnormal, please contact the administrator for handling",
        UserAlreadyExists: "User Already Exists",
        // pay panel
        Yuan: "yuan",
        Back: "Back",
        Other: "Other",
        Recharge: "Recharge Payment",
        ChoosePackage: "Choose Package",
        ChangePackage: "Change Package",
        PaymentAmount: "Payment Amount",
        EnterPaymentAmount: "Please enter payment amount",
        ConfirmOrder: "Confirm Order",
        PaymentNumber: "Payment Number",
        PackageName: "Package Name",
        PaymentMethod: "Payment Method",
        ConfirmPayment: "Confirm Payment",
        Alipay: "Alipay",
        Wechat: "Wechat",
        PhoneNumberFormatIsWrong: "The phone number format is wrong",
        PackageChanging: "Package changing",
        PackageChangeFailed: "Package change failed",
        AmountLimit: "The payment amount must be greater than 0 yuan",
        Paying: "Paying, please do not close or refresh this page",
        AccountVerification: "Need to fill in the account number and then recharge and pay",
        PaymentConfirm: "Is the payment completed?",
        CancelRecharge: "Cancel recharge",
        RechargeSuccess: "Recharge successfully",
        RechargeFailed: "Recharge failed",
        NoProducts: "No package is available",
        MobileVisitorsNotAllowed: "Mobile visitors are not allowed",
        Close: "Close",
        OnlineDeviceManager: "Online Device Manager",
        System: "System",
        Operate: "Operate",
        Logout: "Logout",
        ClientType: "Client Type",
        AddTime: "Add Time",
        ClientType0: "Can't Judge",
        ClientType1: "PC",
        ClientType2: "Mobile Or Other",
        ClientType3: "PC Client",
        ClientType4: "Mobile Client",
        ClientType5: "From IP Table",
        ClientType6: "MAC Auth",
        ClientType7: "Mini Progrem",
        ClientType8: "Mini Progrem Scan",
        ClientType9: "Wechat",
        ClientType10: "LDAP",
        ClientType11: "Dingtalk",
        E2620Tips: "The number of online devices has reached the upper limit, please log out to select and log out of online devices",
        IKnow: "I Know",
        ToChangePassword: "Change Password"
    }
};