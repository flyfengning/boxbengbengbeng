<GameFile>
  <PropertyGroup Name="energy" Type="Node" ID="91e17f9a-87a5-4390-9ff7-c76fb942f896" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="60" Speed="1.0000" ActivedAnimationName="animation0">
        <Timeline ActionTag="1579465590" Property="Position">
          <PointFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="20" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="0.0000" Y="120.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="1579465590" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.3000" Y="0.3000">
            <EasingData Type="5" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="17" X="1.1000" Y="1.1000">
            <EasingData Type="4" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1579465590" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="6" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="49" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="60" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="animation0" StartIndex="0" EndIndex="60">
          <RenderColor A="255" R="244" G="164" B="96" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Manager" Tag="22" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="animation" ActionTag="1579465590" Alpha="127" Tag="23" IconVisible="True" TopMargin="-37.4700" BottomMargin="37.4700" ctype="SingleNodeObjectData">
            <Size X="0.0000" Y="0.0000" />
            <Children>
              <AbstractNodeData Name="num" ActionTag="876077315" Tag="25" IconVisible="False" RightMargin="-40.0000" TopMargin="-8.0000" BottomMargin="-8.0000" LabelText="+99" ctype="TextBMFontObjectData">
                <Size X="40.0000" Y="16.0000" />
                <AnchorPoint ScaleY="0.5000" />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="0.0000" Y="0.0000" />
                <LabelBMFontFile_CNB Type="Normal" Path="fight/addEnergy/energy.fnt" Plist="" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position Y="37.4700" />
            <Scale ScaleX="0.5574" ScaleY="0.5574" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>