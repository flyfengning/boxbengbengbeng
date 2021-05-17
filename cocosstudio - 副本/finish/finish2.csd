<GameFile>
  <PropertyGroup Name="finish2" Type="Layer" ID="e784a4ee-3c61-4a47-9ae7-dd93f7a7a83c" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="40" Speed="1.0000" ActivedAnimationName="animation0">
        <Timeline ActionTag="1217166135" Property="Position">
          <PointFrame FrameIndex="0" X="-1000.0000" Y="-10.0000">
            <EasingData Type="5" />
          </PointFrame>
          <PointFrame FrameIndex="15" X="-430.0000" Y="-10.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-1073176070" Property="Position">
          <PointFrame FrameIndex="6" X="1200.0000" Y="70.0000">
            <EasingData Type="5" />
          </PointFrame>
          <PointFrame FrameIndex="30" X="-100.0000" Y="70.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-553217742" Property="Position">
          <PointFrame FrameIndex="6" X="1200.0000" Y="-85.0000">
            <EasingData Type="8" />
          </PointFrame>
          <PointFrame FrameIndex="30" X="-100.0000" Y="-85.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-895203634" Property="Position">
          <PointFrame FrameIndex="15" X="1200.0000" Y="90.0000">
            <EasingData Type="5" />
          </PointFrame>
          <PointFrame FrameIndex="40" X="305.0000" Y="90.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-689849063" Property="Position">
          <PointFrame FrameIndex="15" X="1200.0000" Y="-64.0000">
            <EasingData Type="8" />
          </PointFrame>
          <PointFrame FrameIndex="40" X="305.0000" Y="-64.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="animation0" StartIndex="0" EndIndex="50">
          <RenderColor A="255" R="192" G="192" B="192" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Layer" Tag="282" ctype="GameLayerObjectData">
        <Size X="1334.0000" Y="750.0000" />
        <Children>
          <AbstractNodeData Name="touch" ActionTag="588121177" Tag="321" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="229" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="1334.0000" Y="750.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="667.0000" Y="375.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0000" />
            <SingleColor A="255" R="0" G="0" B="0" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
          <AbstractNodeData Name="bg" ActionTag="221567775" Tag="808" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="153" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="1334.0000" Y="750.0000" />
            <Children>
              <AbstractNodeData Name="basebg" ActionTag="971480021" Tag="259" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-145.0000" RightMargin="-145.0000" LeftEage="535" RightEage="535" TopEage="247" BottomEage="247" Scale9OriginX="535" Scale9OriginY="247" Scale9Width="554" Scale9Height="256" ctype="ImageViewObjectData">
                <Size X="1624.0000" Y="750.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="667.0000" Y="375.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.2174" Y="1.0000" />
                <FileData Type="Normal" Path="finish/fh_bg.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="Particle" ActionTag="557630309" Tag="460" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="667.0000" RightMargin="667.0000" TopMargin="375.0000" BottomMargin="375.0000" ctype="ParticleObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="667.0000" Y="375.0000" />
                <Scale ScaleX="2.0000" ScaleY="2.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="common/snakeAni/lizi2.plist" Plist="" />
                <BlendFunc Src="770" Dst="1" />
              </AbstractNodeData>
              <AbstractNodeData Name="title" ActionTag="-1212289707" Tag="184" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="141.0000" RightMargin="141.0000" TopMargin="1.5000" BottomMargin="541.5000" LeftEage="95" RightEage="95" TopEage="27" BottomEage="27" Scale9OriginX="95" Scale9OriginY="27" Scale9Width="862" Scale9Height="153" ctype="ImageViewObjectData">
                <Size X="1052.0000" Y="207.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="667.0000" Y="645.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.8600" />
                <PreSize X="0.7886" Y="0.2760" />
                <FileData Type="Normal" Path="finish/fh_title.png" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="close" ActionTag="-446898181" Tag="185" IconVisible="False" PositionPercentYEnabled="True" LeftMargin="45.0000" RightMargin="1219.0000" TopMargin="24.5000" BottomMargin="669.5000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="40" Scale9Height="34" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="70.0000" Y="56.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="80.0000" Y="697.5000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.0600" Y="0.9300" />
                <PreSize X="0.0525" Y="0.0747" />
                <TextColor A="255" R="65" G="65" B="70" />
                <NormalFileData Type="Normal" Path="finish/fh_back.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="againBtn" ActionTag="-229941788" Tag="186" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="495.5000" RightMargin="495.5000" TopMargin="604.0000" BottomMargin="54.0000" TouchEnable="True" FontSize="42" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="313" Scale9Height="70" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="343.0000" Y="92.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="667.0000" Y="100.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.1333" />
                <PreSize X="0.2571" Y="0.1227" />
                <FontResource Type="Default" Path="" Plist="" />
                <TextColor A="255" R="156" G="85" B="11" />
                <NormalFileData Type="Normal" Path="finish/fh_blueBtn.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="midNode" ActionTag="1147180073" Tag="187" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="667.0000" RightMargin="667.0000" TopMargin="375.0000" BottomMargin="375.0000" ctype="SingleNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <Children>
                  <AbstractNodeData Name="skin" ActionTag="1217166135" Tag="188" IconVisible="True" LeftMargin="-430.0000" RightMargin="430.0000" TopMargin="10.0000" BottomMargin="-10.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="0.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint />
                    <Position X="-430.0000" Y="-10.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.0000" Y="0.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="rect1" ActionTag="-1073176070" Tag="249" IconVisible="False" LeftMargin="-253.0000" RightMargin="-53.0000" TopMargin="-159.0000" BottomMargin="-19.0000" LeftEage="100" RightEage="100" TopEage="58" BottomEage="58" Scale9OriginX="100" Scale9OriginY="58" Scale9Width="106" Scale9Height="62" ctype="ImageViewObjectData">
                    <Size X="306.0000" Y="178.0000" />
                    <Children>
                      <AbstractNodeData Name="wzText" ActionTag="354217098" Tag="253" IconVisible="False" LeftMargin="20.0000" RightMargin="187.0000" TopMargin="14.0000" BottomMargin="130.0000" FontSize="24" LabelText="最终长度" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="99.0000" Y="34.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="20.0000" Y="147.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.0654" Y="0.8258" />
                        <PreSize X="0.3235" Y="0.1910" />
                        <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="value" ActionTag="-645776988" Tag="254" IconVisible="False" LeftMargin="20.0000" RightMargin="252.0000" TopMargin="91.5000" BottomMargin="33.5000" LabelText="0" ctype="TextBMFontObjectData">
                        <Size X="34.0000" Y="53.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="20.0000" Y="60.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.0654" Y="0.3371" />
                        <PreSize X="0.1111" Y="0.2978" />
                        <LabelBMFontFile_CNB Type="Normal" Path="finish/fh_font.fnt" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="-100.0000" Y="70.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="finish/fh_rect2.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="rect2" ActionTag="-553217742" Tag="250" IconVisible="False" LeftMargin="-253.5000" RightMargin="-53.5000" TopMargin="35.5000" BottomMargin="-134.5000" LeftEage="100" RightEage="100" TopEage="32" BottomEage="32" Scale9OriginX="100" Scale9OriginY="32" Scale9Width="107" Scale9Height="35" ctype="ImageViewObjectData">
                    <Size X="307.0000" Y="99.0000" />
                    <Children>
                      <AbstractNodeData Name="wzText" ActionTag="526698639" Tag="256" IconVisible="False" LeftMargin="20.0000" RightMargin="189.0000" TopMargin="32.0000" BottomMargin="33.0000" FontSize="24" LabelText="击杀数量" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="98.0000" Y="34.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="20.0000" Y="50.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.0651" Y="0.5051" />
                        <PreSize X="0.3192" Y="0.3434" />
                        <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="value" ActionTag="-1248127698" Tag="257" IconVisible="False" LeftMargin="139.0000" RightMargin="134.0000" TopMargin="22.5000" BottomMargin="23.5000" LabelText="0" ctype="TextBMFontObjectData">
                        <Size X="34.0000" Y="53.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="139.0000" Y="50.0000" />
                        <Scale ScaleX="0.6000" ScaleY="0.6000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.4528" Y="0.5051" />
                        <PreSize X="0.1107" Y="0.5354" />
                        <LabelBMFontFile_CNB Type="Normal" Path="finish/fh_font.fnt" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="-100.0000" Y="-85.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="finish/fh_rect3.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="rect3" ActionTag="-895203634" Tag="251" IconVisible="False" LeftMargin="71.0000" RightMargin="-539.0000" TopMargin="-159.0000" BottomMargin="21.0000" LeftEage="100" RightEage="100" TopEage="58" BottomEage="58" Scale9OriginX="100" Scale9OriginY="58" Scale9Width="268" Scale9Height="22" ctype="ImageViewObjectData">
                    <Size X="468.0000" Y="138.0000" />
                    <Children>
                      <AbstractNodeData Name="wzText" ActionTag="751706745" Tag="258" IconVisible="False" LeftMargin="20.0000" RightMargin="302.0000" TopMargin="21.0000" BottomMargin="83.0000" FontSize="24" LabelText="最终长度达到" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="146.0000" Y="34.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="20.0000" Y="100.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.0427" Y="0.7246" />
                        <PreSize X="0.3120" Y="0.2464" />
                        <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="value" ActionTag="616325986" Tag="262" IconVisible="False" LeftMargin="168.0000" RightMargin="283.0000" TopMargin="21.0000" BottomMargin="83.0000" FontSize="24" LabelText="0" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="17.0000" Y="34.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="168.0000" Y="100.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="246" B="58" />
                        <PrePosition X="0.3590" Y="0.7246" />
                        <PreSize X="0.0363" Y="0.2464" />
                        <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="prize" CanEdit="False" ActionTag="-1573987998" VisibleForFrame="False" Tag="265" IconVisible="False" LeftMargin="20.0000" RightMargin="388.0000" TopMargin="63.0000" BottomMargin="15.0000" LeftEage="18" RightEage="18" TopEage="18" BottomEage="18" Scale9OriginX="18" Scale9OriginY="18" Scale9Width="24" Scale9Height="24" ctype="ImageViewObjectData">
                        <Size X="60.0000" Y="60.0000" />
                        <Children>
                          <AbstractNodeData Name="num" ActionTag="-1492668382" Tag="266" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="57.0000" RightMargin="-27.0000" TopMargin="13.0000" BottomMargin="13.0000" FontSize="24" LabelText="x5" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="30.0000" Y="34.0000" />
                            <AnchorPoint ScaleY="0.5000" />
                            <Position X="57.0000" Y="30.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.9500" Y="0.5000" />
                            <PreSize X="0.5000" Y="0.5667" />
                            <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="50.0000" Y="45.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.1068" Y="0.3261" />
                        <PreSize X="0.1282" Y="0.4348" />
                        <FileData Type="Normal" Path="hall/money_2.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="prize2" CanEdit="False" ActionTag="1791450712" VisibleForFrame="False" Tag="267" IconVisible="False" LeftMargin="150.0000" RightMargin="258.0000" TopMargin="63.0000" BottomMargin="15.0000" LeftEage="18" RightEage="18" TopEage="18" BottomEage="18" Scale9OriginX="18" Scale9OriginY="18" Scale9Width="24" Scale9Height="24" ctype="ImageViewObjectData">
                        <Size X="60.0000" Y="60.0000" />
                        <Children>
                          <AbstractNodeData Name="num" ActionTag="-1218016164" Tag="268" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="63.0000" RightMargin="-28.0000" TopMargin="13.0000" BottomMargin="13.0000" FontSize="24" LabelText="x1" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="25.0000" Y="34.0000" />
                            <AnchorPoint ScaleY="0.5000" />
                            <Position X="63.0000" Y="30.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="1.0500" Y="0.5000" />
                            <PreSize X="0.4167" Y="0.5667" />
                            <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="180.0000" Y="45.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.3846" Y="0.3261" />
                        <PreSize X="0.1282" Y="0.4348" />
                        <FileData Type="Normal" Path="hall/money_1.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="doubleBtn" ActionTag="-1094413496" Tag="271" IconVisible="False" LeftMargin="290.0000" RightMargin="18.0000" TopMargin="9.0000" BottomMargin="61.0000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="130" Scale9Height="46" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                        <Size X="160.0000" Y="68.0000" />
                        <Children>
                          <AbstractNodeData Name="wz" ActionTag="773885423" Tag="261" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="21.0000" RightMargin="21.0000" TopMargin="20.5000" BottomMargin="20.5000" LeftEage="38" RightEage="38" TopEage="8" BottomEage="8" Scale9OriginX="38" Scale9OriginY="8" Scale9Width="42" Scale9Height="11" ctype="ImageViewObjectData">
                            <Size X="118.0000" Y="27.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="80.0000" Y="34.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.7375" Y="0.3971" />
                            <FileData Type="Normal" Path="finish/fh_doubleWZ.png" Plist="" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="370.0000" Y="95.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.7906" Y="0.6884" />
                        <PreSize X="0.3419" Y="0.4928" />
                        <TextColor A="255" R="65" G="65" B="70" />
                        <NormalFileData Type="Normal" Path="finish/fh_doubleBtn.png" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="getBtn" ActionTag="-936534835" Tag="272" IconVisible="False" LeftMargin="310.0000" RightMargin="38.0000" TopMargin="83.0000" BottomMargin="5.0000" TouchEnable="True" FontSize="24" ButtonText="普通领取" Scale9Enable="True" Scale9Width="3" Scale9Height="3" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                        <Size X="120.0000" Y="50.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="370.0000" Y="30.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.7906" Y="0.2174" />
                        <PreSize X="0.2564" Y="0.3623" />
                        <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                        <TextColor A="255" R="255" G="255" B="255" />
                        <NormalFileData Type="Normal" Path="common/bg_2.png" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="ylqText" ActionTag="1548299785" VisibleForFrame="False" Tag="434" IconVisible="False" LeftMargin="340.0000" RightMargin="53.0000" TopMargin="61.0000" BottomMargin="43.0000" FontSize="24" LabelText="已领取" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="75.0000" Y="34.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="340.0000" Y="60.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.7265" Y="0.4348" />
                        <PreSize X="0.1603" Y="0.2464" />
                        <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="305.0000" Y="90.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="finish/fh_rect1.png" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="rect4" ActionTag="-689849063" Tag="252" IconVisible="False" LeftMargin="71.0000" RightMargin="-539.0000" TopMargin="-5.0000" BottomMargin="-133.0000" LeftEage="100" RightEage="100" TopEage="58" BottomEage="58" Scale9OriginX="100" Scale9OriginY="58" Scale9Width="268" Scale9Height="22" ctype="ImageViewObjectData">
                    <Size X="468.0000" Y="138.0000" />
                    <Children>
                      <AbstractNodeData Name="wzText" ActionTag="301604460" Tag="263" IconVisible="False" LeftMargin="20.0000" RightMargin="302.0000" TopMargin="21.0000" BottomMargin="83.0000" FontSize="24" LabelText="累计长度达到" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="146.0000" Y="34.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="20.0000" Y="100.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.0427" Y="0.7246" />
                        <PreSize X="0.3120" Y="0.2464" />
                        <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="value" ActionTag="-1481618392" Tag="264" IconVisible="False" LeftMargin="168.0000" RightMargin="283.0000" TopMargin="21.0000" BottomMargin="83.0000" FontSize="24" LabelText="0" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="17.0000" Y="34.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="168.0000" Y="100.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="246" B="58" />
                        <PrePosition X="0.3590" Y="0.7246" />
                        <PreSize X="0.0363" Y="0.2464" />
                        <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="prize" CanEdit="False" ActionTag="-1390128012" VisibleForFrame="False" Tag="269" IconVisible="False" LeftMargin="20.0000" RightMargin="388.0000" TopMargin="63.0000" BottomMargin="15.0000" LeftEage="18" RightEage="18" TopEage="18" BottomEage="18" Scale9OriginX="18" Scale9OriginY="18" Scale9Width="24" Scale9Height="24" ctype="ImageViewObjectData">
                        <Size X="60.0000" Y="60.0000" />
                        <Children>
                          <AbstractNodeData Name="num" ActionTag="-1645077744" Tag="270" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="57.0000" RightMargin="-55.0000" TopMargin="13.0000" BottomMargin="13.0000" FontSize="24" LabelText="x500" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="58.0000" Y="34.0000" />
                            <AnchorPoint ScaleY="0.5000" />
                            <Position X="57.0000" Y="30.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.9500" Y="0.5000" />
                            <PreSize X="0.9667" Y="0.5667" />
                            <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="50.0000" Y="45.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.1068" Y="0.3261" />
                        <PreSize X="0.1282" Y="0.4348" />
                        <FileData Type="Normal" Path="hall/money_2.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="prize2" CanEdit="False" ActionTag="-131304031" VisibleForFrame="False" Tag="137" IconVisible="False" LeftMargin="150.0000" RightMargin="258.0000" TopMargin="63.0000" BottomMargin="15.0000" LeftEage="18" RightEage="18" TopEage="18" BottomEage="18" Scale9OriginX="18" Scale9OriginY="18" Scale9Width="24" Scale9Height="24" ctype="ImageViewObjectData">
                        <Size X="60.0000" Y="60.0000" />
                        <Children>
                          <AbstractNodeData Name="num" ActionTag="42877420" Tag="138" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="63.0000" RightMargin="-28.0000" TopMargin="13.0000" BottomMargin="13.0000" FontSize="24" LabelText="x1" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="25.0000" Y="34.0000" />
                            <AnchorPoint ScaleY="0.5000" />
                            <Position X="63.0000" Y="30.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="1.0500" Y="0.5000" />
                            <PreSize X="0.4167" Y="0.5667" />
                            <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="180.0000" Y="45.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.3846" Y="0.3261" />
                        <PreSize X="0.1282" Y="0.4348" />
                        <FileData Type="Normal" Path="hall/money_1.png" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="doubleBtn" ActionTag="361690697" Tag="273" IconVisible="False" LeftMargin="290.0000" RightMargin="18.0000" TopMargin="9.0000" BottomMargin="61.0000" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="130" Scale9Height="46" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                        <Size X="160.0000" Y="68.0000" />
                        <Children>
                          <AbstractNodeData Name="wz" ActionTag="329667710" Tag="260" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="21.0000" RightMargin="21.0000" TopMargin="20.5000" BottomMargin="20.5000" LeftEage="38" RightEage="38" TopEage="8" BottomEage="8" Scale9OriginX="38" Scale9OriginY="8" Scale9Width="42" Scale9Height="11" ctype="ImageViewObjectData">
                            <Size X="118.0000" Y="27.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="80.0000" Y="34.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.7375" Y="0.3971" />
                            <FileData Type="Normal" Path="finish/fh_doubleWZ.png" Plist="" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="370.0000" Y="95.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.7906" Y="0.6884" />
                        <PreSize X="0.3419" Y="0.4928" />
                        <TextColor A="255" R="65" G="65" B="70" />
                        <NormalFileData Type="Normal" Path="finish/fh_doubleBtn.png" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="getBtn" ActionTag="-404156807" Tag="274" IconVisible="False" LeftMargin="310.0000" RightMargin="38.0000" TopMargin="83.0000" BottomMargin="5.0000" TouchEnable="True" FontSize="24" ButtonText="普通领取" Scale9Enable="True" Scale9Width="3" Scale9Height="3" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                        <Size X="120.0000" Y="50.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="370.0000" Y="30.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.7906" Y="0.2174" />
                        <PreSize X="0.2564" Y="0.3623" />
                        <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                        <TextColor A="255" R="255" G="255" B="255" />
                        <NormalFileData Type="Normal" Path="common/bg_2.png" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="ylqText" ActionTag="1254460317" VisibleForFrame="False" Tag="435" IconVisible="False" LeftMargin="340.0000" RightMargin="53.0000" TopMargin="61.0000" BottomMargin="43.0000" FontSize="24" LabelText="已领取" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="75.0000" Y="34.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="340.0000" Y="60.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.7265" Y="0.4348" />
                        <PreSize X="0.1603" Y="0.2464" />
                        <FontResource Type="Normal" Path="font/PingFang Bold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="305.0000" Y="-64.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="finish/fh_rect1.png" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position X="667.0000" Y="375.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.0000" Y="0.0000" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="667.0000" Y="375.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0000" />
            <SingleColor A="255" R="243" G="35" B="35" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>